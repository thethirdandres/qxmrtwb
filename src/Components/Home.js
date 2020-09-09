import React from 'react';
import Messenger from 'react-messenger-customer-chat';

class Home extends React.Component {
    render() {
        return (
            <section className="home-section" >
                <div className="hs-a">
                    <div id="denmark-regular-big" className="hs-a-title   denmark-regular">WE ARE <br className="d-inline d-md-none"/> OPEN 24/7!</div>
                    <div className="hs-a-subtitle   montserrat-regular ">Being true to our name, we are ready to serve you real quick! From our basic commodities to an extensive line of food items, we got it here!</div>
                    <button className="hs-a-button   opensans-regular    text-center align-center"><a href="/store-locator">Check stores  ➜</a></button>
                </div>
                <img className="hs-vector-background-a" src={require("../Library/img/home/vector-background-a.svg")} />
                <div className="hs-b">
                    <div className="hs-b-title   denmark-regular">WHAT'S NEW</div>
                    <div className="hs-b-ad-group  d-flex">
                        <a href="https://www.facebook.com/quixmart/photos/a.163653297175148/1403153109891821/?type=3&theater" target="_blank" rel=" noreferrer noopener"> 
                            <img className="hs-b-ad" src={require("../Library/img/home/1.jpg")}/>
                        </a>
                        <a href="https://www.facebook.com/quixmart/photos/a.163653297175148/1314248325448967/?type=3&theater" target="_blank" rel=" noreferrer noopener"> 
                            <img className="hs-b-ad" src={require("../Library/img/home/2.jpg")}/>
                        </a>
                        <a href="https://www.facebook.com/quixmart/photos/a.218339911706486/1371515586388907/?type=3&theater" target="_blank" rel=" noreferrer noopener"> 
                            <img className="hs-b-ad" src={require("../Library/img/home/3.jpg")}/>
                        </a>
                        <a href="https://www.facebook.com/quixmart/photos/a.218339911706486/1383157308558068/?type=3&theater" target="_blank" rel=" noreferrer noopener">
                            <img className="hs-b-ad" src={require("../Library/img/home/4.jpg")}/>
                        </a>
                    </div>
                </div>        
                <div id="products" className="hs-cd    d-md-flex ">
                    <div className="hs-c   flex-shrink-1 mr-md-auto">
                            <div  className="hs-c-title   denmark-regular text-center text-md-left">NOW SERVING</div>
                            <div className="hs-c-img-group  d-flex flex-column justify-content-around align-items-center">
                                <div className="d-flex mb-3">
                                    <img className="hs-b-ad mr-3" src={require("../Library/img/home/hdr1.jpg")} />
                                    <img className="hs-b-ad" src={require("../Library/img/home/hdr2.jpg")}/>
                                </div>
                                <div className="d-flex  ">
                                    <img className="hs-b-ad mr-3" src={require("../Library/img/home/hdr3.jpg")}/>
                                    <img className="hs-b-ad" src={require("../Library/img/home/hdr4.jpg")}/>
                                </div>
                            </div>
                            {/* <div className="hs-c-button  opensans-regular scale-up-bl">
                                <a href="">Other Products ➜</a>
                            </div> */}
                        </div>
                    <div id="contact" className="hs-d ">
                    <div className="hs-d-title   denmark-regular text-right text-md-left">GET IN TOUCH</div>
                    <div id="montserrat-regular" className="hs-d-main   montserrat-regular-small">
                        <b>HEAD OFFICE: Waffle Time Inc.</b><br/><br/>
                        Door 4, Q.H.P. Business Center, Arsenal St.<br/> Iloilo City, 5000, Philippines <br/> <br/>
                        <b>Tel:</b> (033) 335 - 09 - 35 <br/> 
                        <b>Fax:</b> (033) 335 - 00 - 26 <br/>
                        <b>Customer Care:</b> 0918 9417 419 <br/>
                        <b>Email:</b> customercare@quix.ph<br/><br/><br/>

                        <div className="hs-d-footnote text-center text-md-left">Suggestions, comments or feedbacks are highly appreciated. Please provide your name and message. <br/> We’d like to hear from you!</div>
                    </div>
                    {/* <Messenger /> */}
                    <button className="hs-d-button   opensans-regular text-center"><a>Leave a Message  ➜</a></button>
                </div>
            </div>         
                <img className="hs-vector-background-b" src={require("../Library/img/home/vector-background-b.svg")} />
                <img className="hs-vector-background-c" src={require("../Library/img/home/vector-background-c.svg")} />
            </section>
        )
    }
}

export default Home;