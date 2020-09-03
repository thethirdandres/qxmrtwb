import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-section   d-flex justify-content-around align-items-end align-content-md-center pb-3">
                <div className="d-flex flex-column flex-md-row mr-md-auto ml-md-5">
                    <img className="footer-section-logo" src={require("../Library/img/main/logo.jpg")}/>
                    <div className="montserrat-regular-small-white    ml-md-3 align-self-end">© 2020 Waffle Time Inc. All rights reserved.</div>
                </div>
                <div className="d-flex flex-column flex-md-row align-content-md-end montserrat-regular-small-white">
                    <span className="footer-section-info   mr-md-3"><b className="footer-contact-info">Contact Info</b><br/><br/>
                    Door 4, Q.H.P. Business Center, Arsenal St. Iloilo City <br className="d-block d-md-none"/><br className="d-block d-md-none"/></span>
                    <span>Tel: (033) 335 - 09 - 35 <br/>
                    Fax: (033) 335 - 00 - 26 <br/>
                    Customer Care: 0918 9417 419 <br/>
                    Email: customercare@quix.ph
                    </span>
                </div>
            </footer>
        )
    }
}

export default Footer;