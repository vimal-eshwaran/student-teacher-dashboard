import React from "react";
import Table from 'react-bootstrap/Table';
import Base from "../Base/Base";


function Tables(){
    return (
        <Base
        title={'Tables'}
        description={'DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the official DataTables documentation.'}
        > 
            <div className="t-table">
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>
                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>
                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>
                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>
                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>

                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>
                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>
                    <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>$162,700</td>
                    </tr>

                    
                </tbody>
            </Table>
            </div>
        </Base>
        
    )
}
export default Tables