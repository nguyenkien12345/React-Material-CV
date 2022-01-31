import React from 'react';

export default function Skills() {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h6 className="card-title"><strong>PROFESSIONAL SKILLS</strong></h6>
                    <div className="row">
                        <div className="col s6">
                            <p>HTML</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate blue" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>CSS</p>
                            <div class="progress grey lighten-1">
                                <div className="determinate red" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>JAVASCRIPT</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate cyan" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>PHP</p>
                            <div class="progress grey lighten-1">
                                <div className="determinate purple" style={{ width: "65%" }}></div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>MySQL</p>
                            <div className="progress grey lighten-1">
                                <div className="determinate yellow" style={{ width: "80%" }}></div>
                            </div>
                        </div>
                        <div className="col s6">
                            <p>JQUERY</p>
                            <div class="progress grey lighten-1">
                                <div className="determinate pink" style={{ width: "75%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
