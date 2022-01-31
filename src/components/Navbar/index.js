import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navbar() {
    return (
        <>
            <nav className="blue lighten-1">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/' className="brand-logo">CV</Link>
                        <Link to='/' className="sidenav-trigger" data-target="mobile-demo"><i className="material-icons">menu</i></Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/home'><i class="fa fa-home"></i>&nbsp; Home</Link></li>
                            <li><Link to='/skills'><i class="fa fa-copy"></i>&nbsp; Skills</Link></li>
                            <li><Link to='/experience'><i class="fa fa-id-badge"></i>&nbsp; Experience</Link></li>
                            <li><Link to='/education'><i class="fa fa-graduation-cap"></i>&nbsp; Education</Link></li>
                            <li><Link to='/portfolios'><i class="fa fa-address-card"></i>&nbsp; Portfolios</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><Link to='/home'><i class="fa fa-home"></i>&nbsp; Home</Link></li>
                <li><Link to='/skills'><i class="fa fa-copy"></i>&nbsp; Skills</Link></li>
                <li><Link to='/experience'><i class="fa fa-id-badge"></i>&nbsp; Experience</Link></li>
                <li><Link to='/education'><i class="fa fa-graduation-cap"></i>&nbsp; Education</Link></li>
                <li><Link to='/portfolios'><i class="fa fa-address-card"></i>&nbsp; Portfolios</Link></li>
            </ul>
        </>
    )
}
