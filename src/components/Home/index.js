import React from 'react';
import Navbar from '../Navbar';
import Profile from '../Profile';
import About from '../About';
import Skills from '../Skills';
import Experience from '../Experience';
import Education from '../Education';
import Portfolios from '../Portfolios';

export default function Home() {
    return (
        <section>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l3">
                        <Profile/>
                    </div>
                    <div className="col s12 m8 l9">
                        <About/>
                        <Skills/>
                        <Experience/>
                        <Education/>
                        <Portfolios/>
                    </div>
                </div>
            </div>
        </section>
    )
}
