import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="py-4 px-12 bg-gray-900 text-white flex justify-between items-center">
        <h1>
          <Link to="/">Blog</Link>
        </h1>
        <div className="flex justify-between w-64 px-4">
          <p>
            <Link to="/contact">お問合せ</Link>
          </p>
          <p>
            <Link to="/todo">やること</Link>
          </p>
        </div>
      </header>
    </>
  );
}
