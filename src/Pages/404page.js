import React from "react";
import { Button, Card } from "react-bootstrap";
import Base from "../Base/Base";
import { useHistory } from "react-router-dom";

function Error(){
    const history = useHistory();
    return (
        <Base>
            <div className="e-404">
                <Card.Img variant="top" src="https://freefrontend.com/assets/img/html-funny-404-pages/CodePen-404-Page.gif" />
            </div>
            <div className="e-btn">
                <Button variant="warning" type="submit"
                onClick={()=>history.push('/')}
                >
                    Go to Dashboard
                </Button>
            </div>
        </Base>
        
    )
}
export default Error