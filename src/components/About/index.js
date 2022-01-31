import React from 'react'

export default function About() {
    return (
        <>
            <div className="card">
                <div className="card-content">
                    <h6 className="card-title"><strong>ABOUT ME</strong></h6>
                    <p className="grey-text text-darken-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
                <div className="card-action">
                    <h6 className="card-title"><strong>PERSONAL INFO</strong></h6>
                    <div className="row">
                        <div className="col s12 m6 l6 xl6">
                            <p><strong>Address:</strong>&nbsp;123 Lorem</p>
                            <p><strong>Email:</strong>&nbsp;test@yahoo.com</p>
                            <p><strong>Phone:</strong>&nbsp;123 456 789</p>
                        </div>
                        <div className="col s12 m6 l6 xl6">
                            <p><strong>Main Language:</strong>&nbsp;English</p>
                            <p><strong>Second Language:</strong>&nbsp;Spanish</p>
                            <p><strong>Third Language:</strong>&nbsp;Chinese</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
