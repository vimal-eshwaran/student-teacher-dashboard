import React from "react";
import Base from "../Base/Base";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faStop} from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from "react-bootstrap";

function ButtonsCom(){
    return (
        <div>
            <Base
            title={'Buttons'}
            >
                <div>
                <div className="cart1">
                        <div>
                            <Card border="secondary" style={{ width: '30rem',height:'23rem' }}>
                                <Card.Header>Brand Buttons</Card.Header>
                                <Card.Body>
                                
                                <Card.Text>
                                    Google and Facebook buttons are available featuring each company's respective brand color. They are used on the user login and registration pages.
                                    You can create more custom buttons by adding a new color variable in the _variables.scss file and then using the Bootstrap button variant mixin to create a new style, as demonstrated in the _buttons.scss file.
                                </Card.Text>

                                <div className="d-grid gap-2">
                                    <Button variant="warning" size="lg"><FontAwesomeIcon icon={faStop} />Google Button</Button>
                                    <Button variant="primary" size="lg"><FontAwesomeIcon icon={faPlay} />Facebook Button</Button>
                                </div>
                                </Card.Body>
                            </Card>

                        </div>
                        <div className="cart2">
                            <Card border="secondary" style={{ width: '30rem',height:'23rem' }}>
                                <Card.Header>Split Buttons with Icon</Card.Header>
                                <Card.Body>
                                
                                <Card.Text>
                                Works with any button colors, just use the .btn-icon-split class and the markup in the examples below. The examples below also use the .text-white-50 helper class on the icons for additional styling, but it is not required.
                                </Card.Text>
                                <div className="b-buttons">
                                <Button variant="primary">Primary</Button>{' '}
                                <Button variant="secondary">Secondary</Button>{' '}
                                <Button variant="success">Success</Button>{' '}
                                <Button variant="warning">Warning</Button>{' '}
                                <Button variant="danger">Danger</Button>{' '}
                                <Button variant="info">Info</Button>{' '}
                                <Button variant="dark">Dark</Button>
                    
                                </div>
                                </Card.Body>
                            </Card>

                        </div>

                    </div>
                </div>
            
            </Base>
        </div>
    )
}
export default ButtonsCom