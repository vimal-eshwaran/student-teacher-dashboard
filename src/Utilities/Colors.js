import React from "react";
import Base from "../Base/Base";
import Card from 'react-bootstrap/Card';

function Colors(){
    return (
    <div>
       <Base
       title={'Color Utilities'}
       description={'Bootstrap default utility classes can be found on the official Bootstrap Documentation page. The custom utilities below were created to extend this theme past the default utility classes built into Bootstraps framework.'}
       >
        <div className="das1">
        
        <div className="cart1">
            <div>
                <Card border="secondary" style={{ width: '20rem',height:'25rem' }}>
                    <Card.Header>Custom Text Color Utilities</Card.Header>
                    <Card.Body>
                      <div className="box"> 
                        <Card.Text>.text-gray-100</Card.Text>
                      </div>
                      <div className="box"> 
                        <Card.Text>.text-gray-200</Card.Text>
                      </div>
                      <div className="box"> 
                        <Card.Text>.text-gray-300</Card.Text>
                      </div>
                      <div className="box"> 
                        <Card.Text>.text-gray-400</Card.Text>
                      </div>
                    
                    </Card.Body>
                </Card>

            </div>
            <div>
                <Card border="secondary" style={{ width: '20rem',height:'25rem' }}>
                    <Card.Header>Custom Background Gradient Utilities</Card.Header>
                    <Card.Body>
                      
                    <Card.Text>
                    <div className="box1"> 
                        <Card.Text>.text-gray-100</Card.Text>
                      </div>
                      <div className="box2"> 
                        <Card.Text>.text-gray-200</Card.Text>
                      </div>
                      <div className="box3"> 
                        <Card.Text>.text-gray-300</Card.Text>
                      </div>
                      <div className="box4"> 
                        <Card.Text>.text-gray-400</Card.Text>
                      </div>
                      <div className="box5"> 
                        <Card.Text>.text-gray-100</Card.Text>
                      </div>
                      <div className="box6"> 
                        <Card.Text>.text-gray-200</Card.Text>
                      </div>
                      <div className="box7"> 
                        <Card.Text>.text-gray-300</Card.Text>
                      </div>
                      <div className="box8"> 
                        <Card.Text>.text-gray-400</Card.Text>
                      </div>
                    </Card.Text>
                    </Card.Body>
                </Card>

            </div>

            
            <div>
                <Card border="secondary" style={{ width: '20rem',height:'25rem' }}>
                    <Card.Header>Custom Grayscale Background Utilities</Card.Header>
                    <Card.Body>
                      
                    <Card.Text>
                    <div className="box11"> 
                        <Card.Text>.text-primary-100</Card.Text>
                      </div>
                      <div className="box12"> 
                        <Card.Text>.text-gray-200</Card.Text>
                      </div>
                      <div className="box13"> 
                        <Card.Text>.text-sec-300</Card.Text>
                      </div>
                      <div className="box14"> 
                        <Card.Text>.text-warning-400</Card.Text>
                      </div>
                      <div className="box15"> 
                        <Card.Text>.text-info-100</Card.Text>
                      </div>
                      <div className="box16"> 
                        <Card.Text>.text-g-200</Card.Text>
                      </div>
                      <div className="box17"> 
                        <Card.Text>.text-light-300</Card.Text>
                      </div>
                      <div className="box18"> 
                        <Card.Text>.text-think-400</Card.Text>
                      </div>
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
export default Colors