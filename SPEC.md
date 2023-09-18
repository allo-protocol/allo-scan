# Spec — Live Tables & Instant APIs

The following docs are focused on:

1. Setting up the Spec project for Alloscan
2. Adding Live Tables to Postgres for the Alloscan application
3. Spinning up your Live Tables locally
4. Running an instant GraphQL API on top of your Live Tables

If you're looking for the Allo v2 Live Objects, those can be found [here](https://github.com/allo-protocol/allo-v2-spec).

With that said, let's hit it 😎

* [Intro to Spec Projects](#intro-to-spec-projects)
* [Alloscan Project Setup](#what-is-a-spec-project)
* [Running Spec Locally](#project-config-overview)
* [Instant GraphQL API](#instant-graphql-api)

# Intro to Spec Projects

What is a Spec project and how is it structured?

## What is a Spec Project?

Let's say you have an idea for a new dapp, and you want to use Spec to quickly build out the live data schema for it. The first thing you would do is create a new Spec "project". 

Every project on Spec has its own unique set of API keys, access permissions, and dedicated set of config files that outlines:

1. Which Live Tables you need in your database (with any personalized naming conventions, data mappings, filters, etc.)
2. Which database _environments_ exist in your app's deployment pipeline and how to connect to each (local, staging, prod, etc.)

While Live Objects are your way of indexing custom data up _into_ the Spec network, Spec projects and Live Tables deal exclusively with how you want to _consume_ that data for whatever it is you're building.

## Project Config Overview

To initialize your codebase as a Spec project and generate its config files, run the following from the root folder of your application:

```bash
$ spec init
```

If it doesn't exist already, a new `.spec` folder will be created in the root of your project with the following contents:

```
.spec/
| connect.toml
| project.toml
```

* `connect.toml` - Specifies the different database environments in your project
* [`project.toml`](/.spec/project.toml) - Specifies which Live Tables you want in your database with their respective data sources/mappings/filters/etc.

_The `connect.toml` file is usually gitignored, which is why you don't see it in this GitHub repo._

## Migrations & Automated Config Generation

When adding Live Tables with the Spec desktop app, a couple things will be automatically done for you:

1. The SQL migrations for the underlying Postgres tables will be automatically generated.
2. The Live Table config ([`project.toml`](/.spec/project.toml)) will be automatically written.

All SQL migrations will be saved in the [`.spec/migrations`](/.spec/migrations/) folder.

# Alloscan Project Setup

Let's get the Spec project for Alloscan set up and fully configured locally.

## Requirments

Before setting up your Spec project, make sure you have:

1. An active Spec account
2. The [Spec CLI](https://github.com/spec-dev/allo/blob/master/guides/CLI-Setup.md) installed (`>= 0.1.25`)
3. Postgres (`>= 14`) and `psql`

## Steps

The following steps assume you've already cloned this repo and are operating out of the root folder of the codebase.

#### 1) Create a fresh database

This will be the local database environment for your Alloscan project.

```bash
$ createdb alloscan
```

#### 2) Reinitialize the Spec project

Since `connect.toml` is gitignored, just reinitialize the Spec project to generate that file (nothing will be overwritten).

```bash
$ spec init
```

#### 3) Configure your project's local database environment

Open `connect.toml` and set the `"name"` of the database to `alloscan`. All other fields can be left alone.

Here's an example of what your `connect.toml` will look like:

```toml
# Local database
[local]
name = 'alloscan'
port = 5432
host = 'localhost'
user = '<your-db-username>' # whatever shows up to the left when you just type 'psql' and hit enter
password = '' # leave blank
```

#### 4) Set the local location of your Spec project

> [!NOTE]
> The `allov2/alloscan` project has already been created on Spec with its own set of API credentials 

This next command does the following 3 things:

1. Pulls down your project's API credentials and saves them locally (so that you can run Live Tables locally).
2. Sets your _current_ project to `allov2/alloscan` (many CLI commands run using the _current_ project context).
3. Tells the Spec CLI where `allov2/alloscan` is located locally.

```
$ spec link project allov2/alloscan .
```

# Running Spec Locally

Now that your project is configured, let's run Spec against your local database.

## Requirments

> [!NOTE]
> Don't overlook this next installation, as it's a different library than the CLI

Make sure you have the latest version of Spec installed:

```bash
$ npm install -g @spec.dev/spec
```

## Start Spec

As Spec starts up, it will...

1. Detect and run any new SQL migrations listed in `.spec/migrations/`
2. Add triggers to any new Live Tables to track database operations
3. Backfill any new Live Tables
4. Subscribe to events to keep your tables up-to-date
5. Fetch any missed events since the last time you ran Spec

```bash
$ spec start
```

# Instant GraphQL API

Now that your Live Tables are up and running, you can easily spin up an instant GraphQL API. This is done with the help of [Postgraphile](https://github.com/graphile/crystal), which automatically introspects your Postgres database to generate a GraphQL API.

## Enable the GraphQL Addon

To enable the GraphQL addon for your current Spec project:

```bash
$ spec enable graphql
```

Enabling this will do a couple things:

1. Install the `postgraphile` library
2. Create your Postgraphile config file ([`.spec/graphql/.postgraphilerc.js`](/.spec/graphql/.postgraphilerc.js))

## Start the API

To start your GraphQL API:

```
$ spec run graphql
```

This will run Postgraphile against your local database and expose a couple different endpoints:

* GraphQL API: http://localhost:5555/graphql
* GraphiQL GUI/IDE: http://localhost:5555/graphiql

## Open the GUI/IDE

To explore your new GraphQL schema, navigate to `http://localhost:5555/graphiql`. This front-end is great for checking out which models/relationships exist, seeing which queries you can run, and then writing and executing test queries to see the results.