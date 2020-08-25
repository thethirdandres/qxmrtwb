import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-section   d-flex justify-content-around align-items-end pb-3">
                
                {/* <!-- Load Facebook SDK for JavaScript -->
                <div id="fb-root"></div>
                <!-- Your Chat Plugin code -->
                <div class="fb-customerchat"
                    attribution="setup_tool"
                    page_id="105154704647666"
                    theme_color="#0067A3"
                    logged_in_greeting="Hi! Maano tani!?"
                    logged_out_greeting="Hi! Maano tani!?">
                </div> */}

                <div className="d-flex flex-column">
                    <img className="footer-section-logo" src={require("../Library/img/main/logo.jpg")}/>
                    <div className="montserrat-regular-small-white">© 2020 Waffle Time Inc. All rights reserved.</div>
                </div>
                <div className="d-flex flex-column   montserrat-regular-small-white">
                    <b className="footer-contact-info">Contact Info</b><br/>
                    Door 4, Q.H.P. Business Center, Arsenal St. Iloilo City <br/><br/>
                    Tel: (033) 335 - 09 - 35 <br/>
                    Fax: (033) 335 - 00 - 26 <br/>
                    Customer Care: 0918 9417 419 <br/>
                    Email: customercare@quix.ph
                </div>
            </footer>
        )
    }
}

export default Footer;