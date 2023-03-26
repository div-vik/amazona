import Head from "next/head";
import Link from "next/link";
import React from "react";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Amazona" : "Amazona"}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link className="text-lg font-bold" href="/">
              amazona
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright © 2023 Amazona</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
