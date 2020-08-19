import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <section className="home-section" >
                <div className="hs-a">
                    <div className="hs-a-title  denmark-regular">WE ARE OPEN 24/7</div>
                    <div className="hs-a-subtitle">Being true to our name, we are ready to serve you real quick! From our basic commodities to an extensive line of food items, we got it here!</div>
                    <button>Check stores ➜ </button>
                </div>
                <img className="hs-a-vector-background" src={require("../Library/img/home/vector-background-m.jpg")} />
                
            </section>
        )
    }
}

export default Home;