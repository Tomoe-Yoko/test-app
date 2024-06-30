import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flexbox">
        <h1>
          <Link to="/">Blog</Link>
        </h1>
        <p>
          <Link to="/contact">お問合せ</Link>
        </p>
      </header>
    </>
  );
}
