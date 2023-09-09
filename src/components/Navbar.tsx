"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="flex-1 ml-3">
        <Image priority src={logo} alt="AlloScan" height={25}/>
        <a className="font-bold normal-case text-xl ml-3">AlloScan</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
