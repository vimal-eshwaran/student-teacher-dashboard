import React from "react";
import Base from "../Base/Base";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Card } from "react-bootstrap";



function Forgot(){
    return (
        <div>
            <Base>

            <div className="l-login">
                <div className="l-img">
                <Card.Img variant="top" src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600" />

                </div>
                <div className="f-log">
                     <div className="f-text">
                        <h3>Forgot Your Password?</h3>
                        <p>We get it, stuff happens. </p>
                        <p>Just enter your email address below </p>
                     </div>
                    <Form  style={{ width: '20rem',height:'23rem' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" />
                        </Form.Group>
                        <div className="f-btn1">
                        <Button variant="warning" type="submit">
                            Reset Password
                        </Button>
                        </div>
                        
                        <div className="f-btn">
                            <Card.Link href="#">Create an Account!</Card.Link> <br/>
                            <Card.Link href="#">Already have an account? Login!</Card.Link>
                        </div>
                    </Form>
                </div>
            </div>
            </Base>
        </div>

    )
}
export default Forgot