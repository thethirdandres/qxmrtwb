import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Map from './Map.js';

import { FilterableContent } from 'react-filterable-content'

const resultsContent = [
    {
        name: "Quix! Mart Mandurriao",
        address: "Q. Abeto St, Mandurriao, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Q.+Abeto+St,+Mandurriao,+Iloilo+City,+5000+Iloilo/@10.7174999,122.5372915,17.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee532c48b7135:0x601ff27c5d5118c!2m2!1d122.538256!2d10.7179099"
    },
    {
        name: "Quix! Mart Jaro",
        address: "Jaro, Iloilo City, Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Jaro,+Iloilo+City,+Iloilo/@10.7147956,122.5600648,15.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee5179cfcda97:0xa54dbb34a2e24a0a!2m2!1d122.562537!2d10.7160501"
    },
    {
        name: "Quix! Mart Smallville",
        address: "Smallville Complex, Corner of Glicerio Pison Avenue & Benigno Aquino Avenue, San Rafael, Madurriao, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Smallville+Complex,+Corner+of+Glicerio+Pison+Avenue+%26+Benigno+Aquino+Avenue,+San+Rafael,+Madurriao,+Iloilo+City,+5000+Iloilo/@10.7278233,122.5004707,12.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee5471d5d9a7b:0x5c84ba9f51e62a09!2m2!1d122.5522762!2d10.7057226"
    },
    {
        name: "Quix! Mart Molo",
        address: "Iloilo Supermarket, 5000 Avanceña St, Molo, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Iloilo+Supermarket,+5000+Avance%C3%B1a+St,+Molo,+Iloilo+City,+5000+Iloilo/@10.728054,122.5004707,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee55186e7bd99:0x2022a094e634b4e2!2m2!1d122.5431444!2d10.6973437"
    },
    {
        name: "Quix! Mart Arevalo",
        address: "Sto. Sur Arevalo, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Sto.+Sur+Arevalo,+Iloilo+City,+5000+Iloilo/@10.7283756,122.5004705,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aef06f4800c161:0x2c02e5ce817cc6d!2m2!1d122.5047241!2d10.6799414"
    },
    {
        name: "Quix! Mart Bolilao",
        address: "Jalandoni St, Brgy. Boliao, Mandurriao, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Jalandoni+St,+Brgy.+Boliao,+Mandurriao,+Iloilo+City,+5000+Iloilo/@10.7076896,122.5544997,14.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee53bebce9a3b:0xf7652825014edfd8!2m2!1d122.5530004!2d10.7140099"
    },
    {
        name: "Quix! Mart Lopez Jaena",
        address: "Lopez Jaena St, Jaro, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Lopez+Jaena+St,+Jaro,+Iloilo+City,+5000+Iloilo/@10.729019,122.5004701,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee5208c20465d:0x8f99c63b38956f33!2m2!1d122.5566231!2d10.7263616"
    },
    {
        name: "Quix! Mart Delgado",
        address: "Delgado St, Iloilo City Proper, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Delgado+St,+Iloilo+City+Proper,+Iloilo+City,+5000+Iloilo/@10.7296623,122.5004698,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee56f6b02e621:0xf2cb7dfb48af84ce!2m2!1d122.5671538!2d10.6977193"
    },
    {
        name: "Quix! Mart 1688",
        address: "1688 Ledesma St, Iloilo City Proper, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+1688+Ledesma+St,+Iloilo+City+Proper,+Iloilo+City,+5000+Iloilo/@10.729984,122.5004696,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee565ea2f8d53:0xacff4440b3d1a855!2m2!1d122.5666539!2d10.6955621"
    },
    {
        name: "Quix! Mart Jalandoni",
        address: "Delgado Street, Corner Dalan Jalandoni St., Villa Anita, Iloilo City, 5000 Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Delgado+Street,+Corner+Dalan+Jalandoni+St.,+Villa+Anita,+Iloilo+City,+5000+Iloilo/@10.7306273,122.5004693,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee567de1c2cf9:0xf646da418c3a6942!2m2!1d122.561325!2d10.6970413"
    },
    {
        name: "Quix! Mart Leganes",
        address: "National Hwy, Leganes, Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+National+Hwy,+Leganes,+Iloilo/@10.7312707,122.5004689,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33aee3a183df200b:0x13366dc9d2e3867d!2m2!1d122.5879222!2d10.7849561"
    },
    {
        name: "Quix! Mart Janiuay",
        address: "Janiuay, Iloilo",
        link: "https://www.google.com/maps/dir//Quix+Mart,+Janiuay,+Iloilo/@10.9304959,122.4065938,11.13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33af048d7404ff1b:0x56d809d6e47e290e!2m2!1d122.5022337!2d10.9478639"
    },
    {
        name: "Quix! Mart Passi",
        address: "F. Palmares Sr. St, Passi City, Iloilo",
        link: "https://www.google.com/maps/dir//Quix+Mart,+F.+Palmares+Sr.+St,+Passi+City,+Iloilo/@10.8939595,122.2848694,9.75z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33af14637c0fb159:0xdbb169bc4cf46d63!2m2!1d122.6414675!2d11.1060599"
    },
    {
        name: "Quix! Mart Guimbal",
        address: "#4, Rizal St, Guimbal, Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+%234,+Rizal+St,+Guimbal,+Iloilo/@10.6297184,122.2500147,11.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33ae58ef5b908eef:0xc8d3d1f3e793c88b!2m2!1d122.3225728!2d10.6619561"
    },
    {
        name: "Quix! Mart Sibalom",
        address: "Veñegas St, Sibalom, Antique",
        link: "https://www.google.com/maps/dir//Quix+Mart,+Ve%C3%B1egas+St,+Sibalom,+Antique/@10.7624875,121.9627235,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33ae4915f26cfe73:0xc143103f3f9de807!2m2!1d122.0171566!2d10.7877981"
    },
    {
        name: "Quix! Mart San Jose",
        address: "San Jose de Buenavista, Antique",
        link: "https://www.google.com/maps/dir//Quix+Mart,+San+Jos%C3%A9,+Antique/@10.7516309,121.9422439,13.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33ae39d16307ffa7:0x458cc5caabecf2ac!2m2!1d121.941401!2d10.7523553"
    },
    {
        name: "Quix! Mart San Jose",
        address: "San Jose de Buenavista, Antique",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+San+Jose+de+Buenavista,+Antique/@10.7444927,121.9363986,13.25z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33ae396607e9a7c9:0xf65686ec6be8d634!2m2!1d121.9435651!2d10.7433219"
    },
    {
        name: "Quix! Mart Estancia",
        address: "Estancia, Iloilo",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Estancia,+Iloilo/@11.4437668,123.0352058,11.54z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33a6016ea3da6121:0xebc1f3c486aa11cf!2m2!1d123.1524052!2d11.4552567"
    },
    {
        name: "Quix! Mart Kalibo",
        address: "J. Cardinal Sin Ave., Andagaw, Kalibo, Aklan",
        link: "https://www.google.com/maps/dir//Quix+Mart,+J.+Cardinal+Sin+Ave.,+Andagaw,+Kalibo,+Aklan,+Kalibo,+Aklan/@11.6984498,122.3478702,13.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33a59d9d26694ea3:0x3754f4843300e557!2m2!1d122.3683341!2d11.7013921"
    },
    {
        name: "Quix! Mart Roxas",
        address: "Hughes Street, Roxas City, Capiz",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Hughes+Street,+Roxas+City,+Capiz/@11.5838408,122.7368318,13.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33a5f343fc8a535d:0x32bff363e3888c33!2m2!1d122.7523068!2d11.5846293"
    }, 
    {
        name: "Quix! Mart Roxas",
        address: "Roxas City, Capiz",
        link: "https://www.google.com/maps/dir//Quix!+Mart,+Roxas+City,+Capiz/@11.5838408,122.7368318,13.5z/data=!4m8!4m7!1m0!1m5!1m1!1s0x33a5f302f248f4f7:0x571ad2fdbaff1977!2m2!1d122.7542693!2d11.5695136"
    }

]


class StoreLocator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           keyword: '',
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        if (event && event.target) {
            const { value } = event.target;
            this.setState({keyword:value});
        }
    }


    render() {
        let {keyword} = this.state;
        return (
            <section className="store-locator-section text-center">
                <div className="sls-title   text-center denmark-regular">
                    STORE LOCATOR
                </div>
                {/* <div className="sls-search-title   text-center montserrat-regular-small">
                    Enter your location
                </div> */}
                
                
                <Map className="sls-map   "/>
                <div className="sls-search ">
                    <input 
                        type={'text'}
                        value={keyword}
                        placeholder={'Enter location'}
                        className="text-center mt-5 w-75" 
                        onChange={this.onChange}
                    />
                    <FilterableContent keyword={keyword}>
                        <ul className="sls-results    list-unstyled text-left px-4 mt-2">
                            {resultsContent.map((x) =>
                                <li className="mb-5" filterable-group='true'>
                                    <div className="montserrat-regular-bold mb-2">{x.name}</div>
                                    <div className="montserrat-regular-small w-75">{x.address}</div>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <div className="montserrat-regular-small-bold" filterable-ignore='true'>Open Now: Open 24 Hours</div>
                                        <a className="show-directions    montserrat-regular-small-red" href={x.link} filterable-ignore='true'>Show Directions</a>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </FilterableContent>
                </div>
            </section>
        )
    }
}

export default StoreLocator;