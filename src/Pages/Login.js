import React from "react";
import Base from "../Base/Base";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";


function Login(){
    return (
        <div>
            <Base>

            <div className="l-login">
                <div className="l-img">
                <Card.Img variant="top" src="https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=600" />

                </div>
                <div className="l-log">
                    
                    <Form  style={{ width: '20rem',height:'23rem' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
            </Base>
        </div>

    )
}
export default Login