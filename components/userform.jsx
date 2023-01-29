
import React from "react";

import { Row, Button } from 'react-bootstrap';

import { useCart } from "react-use-cart";

import { UserFormContext } from "@/context/FormContext";
import { useContext } from "react";
import { useRouter } from "next/router";

function UserForm() {

    const router = useRouter()
    const { formData, setFormData, submitForm } = useContext(UserFormContext);
    const { emptyCart } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault()
        submitForm
        emptyCart();
        router.push("/overview")
    }


    return (
        <form>
            <Row className="row">
                <div className="col-md-6">
                    <div className="form-group mb-3">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" value={formData.firstname || ''} className="form-control" onChange={(e) => setFormData({ ...formData, "firstname": e.target.value }) }></input>
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

    )
}

export default UserForm;

