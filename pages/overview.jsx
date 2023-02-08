import React, { useContext } from "react";
import { UserFormContext } from "@/context/FormContext";
import { ListGroup, Card, Button } from 'react-bootstrap';

export default function Overview() {
    const { formData, radio } = useContext(UserFormContext);


    return (
        <div className="col-md-12 d-flex align-items-center justify-content-center colIsEmptyHeight">
            <div>

                <Card>
                    <Card.Header>
                        Thank you for your order
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Order Overview</Card.Title>
                        <Card.Text>
                            Thank you for your purchase. We love having customers like you, and your support means everything to us.
                        </Card.Text>
                        <ListGroup className="mt-3">
                            <ListGroup.Item>
                                First Name: {JSON.stringify(formData.firstname)}
                            </ListGroup.Item>
                            <ListGroup.Item>Last Name: {JSON.stringify(formData.lastname)}</ListGroup.Item>
                            <ListGroup.Item>Email Address: {JSON.stringify(formData.email)}</ListGroup.Item>
                            <ListGroup.Item>Phone Number: {JSON.stringify(formData.phone)}</ListGroup.Item>
                            <ListGroup.Item>Home Address: {JSON.stringify(formData.address)}</ListGroup.Item>
                            <ListGroup.Item>City: {JSON.stringify(formData.city)}</ListGroup.Item>
                            <ListGroup.Item>Shipping Option: {radio}</ListGroup.Item>
                        </ListGroup>
                        <Button className="w-100 mt-4" size="lg" href="/" variant="dark">Continue</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    )
}