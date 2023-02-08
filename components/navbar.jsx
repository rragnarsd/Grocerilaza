import React from "react";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useCart } from 'react-use-cart';
import { Button } from 'react-bootstrap';
import { FaCartPlus } from 'react-icons/fa';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBarShop() {
  const { totalUniqueItems, isEmpty } = useCart();

  return <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="shopName h2 fs-2">Grocerilaza</Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link href="/cart">
              <Button variant="outline-light" style={{ width: "3rem", height: "3rem", position: "relative" }}>
                <FaCartPlus className="mb-1"></FaCartPlus>
                <div>
                  { isEmpty ? <span></span> : <span className="rounded-circle bg-warning d-flex justify-content-center align-items-center" style={{
                        color: "black", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0,
                        transform: "translate(25%, 25%"
                      }}>{totalUniqueItems}</span>
                  }
                </div>
              </Button>
            </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}


// disables server side rendering for this page.
export default dynamic(() => Promise.resolve(NavBarShop), {
  ssr: false
})