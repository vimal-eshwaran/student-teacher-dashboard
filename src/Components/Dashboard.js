import React from "react";
import Base from "../Base/Base";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Dashboard(){
    return (
    <div>
       <Base
       title={'Dashboard'}
       >
        <div className="das1">
        <div className="cards">
        <div className="blue">
                <Card border="secondary" style={{ width: '15rem' }}>
                <Card.Body>
                <Card.Text>
                    EARNINGS(MONTHLY)
                </Card.Text>
                <Card.Title>$40,000</Card.Title>
                </Card.Body>
            </Card>
            </div>

            <div className="blue">
                <Card border="secondary" style={{ width: '15rem' }}>
                <Card.Body>
                <Card.Text>
                    EARNINGS(ANNUALY)
                </Card.Text>
                <Card.Title>$215,000</Card.Title>
                </Card.Body>
            </Card>
            </div>
            <div className="blue">
                <Card border="secondary" style={{ width: '15rem'}}>
                <Card.Body>
                <Card.Text>TASK</Card.Text>
                <ProgressBar variant="info" now={50} />50%<br/>
                </Card.Body>
            </Card>
            </div>
            <div className="blue">
                <Card border="secondary" style={{ width: '15rem' }}>
                <Card.Body>
                <Card.Text>
                    PENDING REQUEST
                </Card.Text>
                <Card.Title>18</Card.Title>
                </Card.Body>
            </Card>
            </div>
            

        </div>

        <div className="cart1">
            <div>
                <Card border="secondary" style={{ width: '30rem',height:'23rem' }}>
                    <Card.Header>Projects</Card.Header>
                    <Card.Body>
                    
                    <Card.Text>
                    <div>
                        <Card.Text>Server Migration</Card.Text>
                        <ProgressBar variant="success" now={20} /><br/>

                        <Card.Text>Sales Tracking</Card.Text>
                        <ProgressBar variant="info" now={40} /><br/>

                        <Card.Text>Customer Database</Card.Text>
                        <ProgressBar variant="warning" now={60} /><br/>

                        <Card.Text>Payout Details</Card.Text>
                        <ProgressBar variant="danger" now={80} /><br/>

                        <Card.Text>Account Setup</Card.Text>
                        <ProgressBar variant="primary" now={100} /><br/>
                    </div>
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            <div className="cart2">
                <Card border="secondary" style={{ width: '30rem',height:'23rem' }}>
                    <Card.Header>Illustrations</Card.Header>
                    <Card.Body>
                    <Card.Img variant="top" src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" />
                    <Card.Text>
                    Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>

        </div>
    </div>


       </Base>



    </div>
    )
    
}
export default Dashboard