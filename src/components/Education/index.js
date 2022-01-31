import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Education() {
    return (
        <>
        <div className="card">
            <div className="card-content">
                <h6 className="card-title"><strong>EDUCATION</strong></h6>
                <table className="striped">
                    <thead>
                        <tr>
                            <th>Certificate</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>Web Development</td>
                                <td>Jan 2018</td>
                                <td><Link to="!#" className="btn blue lighten-2">View</Link></td>
                            </tr>
                            <tr>
                                <td>BackEnd</td>
                                <td>Jan 2019</td>
                                <td><Link to="!#" className="btn blue lighten-2">View</Link></td>
                            </tr>
                            <tr>
                                <td>FrontEnd</td>
                                <td>Jan 2020</td>
                                <td><Link to="!#" className="btn blue lighten-2">View</Link></td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
