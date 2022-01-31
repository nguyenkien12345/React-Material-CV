import React from 'react'
import Anh from '../../Images/nguyentrungkien.jpg';
import { HashLink as Link } from 'react-router-hash-link';
import './style.css'

export default function Profile() {
    return (
        <>
            {/* Khi nào dùng card reveal thì sử dung activator */}
            <div className="card">
                <div className="card-image">
                    <img  className="activator" src={Anh} alt="Nguyen Trung Kien"/>
                    <Link className="btn-floating halfway-fab waves-effect wave-light red">
                        <i className="material-icons activator">more_vert</i>
                    </Link>
                </div>
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4 activator">
                        Nguyễn Trung Kiên
                    </span>
                    <p>Full Stack Web Developer</p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">
                        Follow Me
                        <i className="material-icons right">close</i>
                    </span>
                    <p className="flex-container">
                        <i className="fa fa-facebook indigo-text darken-4"></i>
                        <i className="fa fa-twitter blue-text lighten-3"></i>
                        <i className="fa fa-linkedin deep-text darken-4"></i>
                        <i className="fa fa-instagram amber-text darken-2"></i>
                        <i className="fa fa-google-plus red-text darken-1"></i>
                    </p>
                </div>
            </div>
        </>
    )
}
