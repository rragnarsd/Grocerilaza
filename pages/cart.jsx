import React from "react"
import Head from 'next/head'
import { useCart } from "react-use-cart"
import { Row, Col, Card, Button } from 'react-bootstrap';

function Cart() {
    const { updateItemQuantity, items, cartTotal, totalItems, isEmpty } = useCart();
    return (

        <div>
            {
                isEmpty ? <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center colIsEmptyHeight">
                        <div className="row g-3 col-md-8 col-sm-12 text-center">
                            <h5>Your cart is currently empty</h5>
                            <h3>Would you like to change that?</h3>
                            <Button size="lg" href="/" variant='dark'>Explore Products</Button>
                        </div>
                    </div>
                </div>
                    :
                    <Row md={2} xs={1} lg={2} className="g-3 my-2">
                        <Head>
                            <title>Cart</title>
                        </Head>

                        <div className="col-12">
                            <div className="row g-3">
                                {items.map((product) => (
                                    <Col className="col-12" key={product.id}>
                                        <Card className="h-100">
                                            <Card.Body>
                                                <Row>
                                                    <Col>
                                                        <Card.Img src={product.imgUrl} height='140px' style={{ objectFit: "cover" }} />
                                                    </Col>
                                                    <Col>
                                                        <Card.Title>
                                                            <span className="fs-3">{product.name}</span>
                                                        </Card.Title>
                                                        <Card.Text>
                                                            <span className=" ms-2 text-muted">${product.price}</span>
                                                        </Card.Text>

                                                        <div className="d-flex align-items-center justify-center">
                                                            <Button variant="outline-secondary" size="md" onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>-</Button>
                                                            <p className="px-4 pt-3">x{product.quantity}</p>
                                                            <Button variant="dark" size="md" onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>+</Button>
                                                        </div>

                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </div>
                        </div>


                        <div className="col-12">
                            <div className="row g-3">
                                <Col className="col-12">
                                    <Card className="h-100">
                                        <Card.Body>
                                            <div>
                                                <span>Total Items:</span>  <span>{totalItems}</span>
                                            </div>
                                            <div>
                                                <span>Total Price:</span>  <span>${cartTotal.toFixed(0)}</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>


                                <Col className="col-12">
                                    <Button className="w-100" size="lg" variant="dark" href="/checkout">Checkout</Button>
                                </Col>
                            </div>
                        </div>
                    </Row>
            }
        </div>
    )
}

export default Cart;

