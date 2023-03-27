import Head from "next/head";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";

const Layout = ({ title, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
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
                {cartItems && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cartItems}
                  </span>
                )}
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
