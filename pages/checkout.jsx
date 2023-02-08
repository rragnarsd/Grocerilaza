import { Card, Table, Row, Button } from 'react-bootstrap';
import { UserFormContext } from "@/context/FormContext";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import React, { useContext, useState } from "react";
import ItemsArray from "@/components/itemsArray";


function Checkout() {
    const { items } = useCart();

    const router = useRouter()
    const { formData, setFormData, submitForm, radio, setRadio } = useContext(UserFormContext);
    const { emptyCart } = useCart();


    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm
        emptyCart();
        router.push("/overview")
    }

    return (
        <div>
            <div className="g-3 my-4">
                <div>
                    <h4>Checkout</h4>
                </div>

                <div className="py-4">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-7">
                                <div className="card">
                                    <div className="card-header">
                                        <h4>Basic Information</h4>
                                    </div>
                                    <div className="card-body">

                                        <form>
                                            <Row className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="firstname">First Name</label>
                                                        <input type="text" name="firstname" value={formData.firstname || ''} className="form-control" onChange={(e) => setFormData({ ...formData, "firstname": e.target.value })}></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="lastname">Last Name</label>
                                                        <input type="text" name="lastname" value={formData.lastname || ''} className="form-control" onChange={(e) => setFormData({ ...formData, "lastname": e.target.value })}></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="phone">Phone Number</label>
                                                        <input type="text" name="phone" value={formData.phone || ''} className="form-control" onChange={(e) => setFormData({ ...formData, "phone": e.target.value })}></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="email">Email Address</label>
                                                        <input type="email" name="email" value={formData.email || ''} className="form-control" onChange={(e) => setFormData({ ...formData, "email": e.target.value })}></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="address">Address</label>
                                                        <input type="text" name="address" value={formData.address || ''} className="form-control" onChange={(e) => setFormData({ ...formData, "address": e.target.value })}></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <label htmlFor="city">City</label>
                                                        <input type="text" name="city" value={formData.city || ''} className="form-control" onChange={(e) => setFormData({ ...formData, "city": e.target.value })}></input>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group text-end">
                                                        <Button className="mt-2" size="lg" variant="dark" onClick={handleSubmit}>Place Order</Button>
                                                    </div>
                                                </div>
                                            </Row>
                                        </form>

                                    </div>
                                </div>


                            </div>
                            <div className="col-md-5">
                                <Card className="mb-4">
                                    <Card.Body>
                                        <div>
                                            <h5>Shipping Options</h5>
                                            <div className='form-check'>
                                                <input type="radio" id='0' name="radios" className='form-check-input'
                                                    checked={radio === "Pick Up"} value="Pick Up" onChange={(e) => setRadio(e.target.value)}></input>
                                                <label htmlFor="" className='form-check-label'>Pick Up</label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="radio" id='1' name="radios" className='form-check-input'
                                                    checked={radio === "Post Office"} value="Post Office" onChange={(e) => setRadio(e.target.value)}></input>
                                                <label htmlFor="" className='form-check-label'>Post Office</label>
                                            </div>
                                            <div className='form-check'>
                                                <input type="radio" id='2' name="radios" className='form-check-input'
                                                    checked={radio === "Home Delivery"} value="Home Delivery" onChange={(e) => setRadio(e.target.value)}></input>
                                                <label htmlFor="" className='form-check-label'>Home Delivery</label>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>

                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <ItemsArray items={items} />
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Checkout;