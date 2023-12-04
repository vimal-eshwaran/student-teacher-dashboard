import React from "react";
import Base from "../Base/Base";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Carts(){
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
                <ProgressBar variant="info" now={40} /><br/>
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
                <Card border="secondary" style={{ width: '30rem',height:'8rem' }}>
                    <Card.Header>Default Card Example</Card.Header>
                    <Card.Body>
                      
                    <Card.Text>
                    This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>
            <div>
                <Card border="secondary" style={{ width: '30rem',height:'8rem' }}>
                    <Card.Header>Dropdown Card Example</Card.Header>
                    <Card.Body>
                      
                    <Card.Text>
                    Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>

            
            <div>
                <Card border="secondary" style={{ width: '30rem',height:'8rem' }}>
                    <Card.Header>Basic Card Example</Card.Header>
                    <Card.Body>
                      
                    <Card.Text>
                    The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>

            <div>
                <Card border="secondary" style={{ width: '30rem',height:'8rem' }}>
                    <Card.Header>Collapsable Card Example</Card.Header>
                    <Card.Body>
                      
                    <Card.Text>
                    This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand!
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
export default Carts