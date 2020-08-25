import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class StoreLocator extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            query: "https://www.google.com/maps/search/Quix+Mart/@10.7152455,122.516603,13z"
        };
    }

    updateQuery() {

    }

    render() {
        return (
            <section className="store-locator-section text-center">
                <div className="slc-title   text-center denmark-regular">
                    STORE LOCATOR
                </div>
                <div className="slc-search-title   text-center montserrat-regular-small">
                    Enter your location
                </div>
                <form onSubmit={this.updateQuery}>
                    <input id="map-search-query" type="text" className="slc-search-bar   text-center" name="search" />
                </form>
                <div className="slc-map">
                    <iframe id=""allowFullScreen="false" src={this.state.query}></iframe>

                    {/* <Map google={this.props.google} zoom={15}>
                        <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />
                
                        <InfoWindow onClose={this.onInfoWindowClose}>
                            <div>
                                <h1>{this.state.selectedPlace.name}</h1>
                            </div>
                        </InfoWindow>
                    </Map> */}
                </div>
            </section>
        )
    }
}

export default StoreLocator;