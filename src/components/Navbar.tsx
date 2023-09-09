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
    </div>
  );
};

export default Navbar;
