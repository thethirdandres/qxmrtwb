import React from 'react';

// import rec from '../assets/img/rec-yellow.jpg';


import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  google
} from "react-google-maps";


class Map extends React.Component {

  render() {

    const _ = require("lodash");
    const { compose, withProps, lifecycle } = require("recompose");

    const defaultMapOptions = {
      disableDefaultUI: true,
    };

    const MapWithASearchBox = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJbpjI8KS7fzlHYDjIBeOL8TkPfEhXUSk&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `50vh`}} />,
        containerElement: <div style={{ height: `50vh` }} />,
        mapElement: <div style={{ height: `50vh` }} />,
      }),
      lifecycle({
        componentWillMount() {
          const refs = {}

          this.setState({
            bounds: null,
            center: {
              lat: 41.9, lng: -87.624
            },
            markers: [],
            onMapMounted: ref => {
              refs.map = ref;
            },

            onBoundsChanged: () => {
              this.setState({
                bounds: refs.map.getBounds(),
                center: refs.map.getCenter(),
              })
            },
            onSearchBoxMounted: ref => {
              refs.searchBox = ref;
            },
            onPlacesChanged: () => {
              const places = refs.searchBox.getPlaces();
              const bounds = new google.maps.LatLngBounds();

              places.forEach(place => {
                if (place.geometry.viewport) {
                  bounds.union(place.geometry.viewport)
                } else {
                  bounds.extend(place.geometry.location)
                }
              });
              const nextMarkers = places.map(place => ({
                position: place.geometry.location,
              }));
              const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

              this.setState({
                center: nextCenter,
                markers: nextMarkers,

              });

            },
          })
        },
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={13}
        center={{ lat: 10.743794, lng: 122.546603 }}
        defaultOptions={defaultMapOptions}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 10.753921, lng: 122.572576 }} />
        )}
        {props.isMarkerShowns && (
          <Marker position={{ lat: 11.701394, lng: 122.368334 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 11.584631, lng: 122.752307 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 11.569517, lng: 122.754267 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 11.455264, lng: 123.152405 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.787819, lng: 122.017167 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.752382, lng: 121.941425 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.743326, lng: 121.943564 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.661959, lng: 122.322573 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 11.106109, lng: 122.641445 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.947867, lng: 122.502232 }} />
        )}
        {/* Iloilo City */}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.716709, lng: 122.562553 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.705738, lng: 122.552276 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.714019, lng: 122.553002 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.679943, lng: 122.504725 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.697347, lng: 122.543745 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.726367, lng: 122.556625 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.718179, lng: 122.561152 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.697721, lng: 122.567152 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.732191, lng: 122.559607 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.695563, lng: 122.566655 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.697045, lng: 122.561324 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.693573, lng: 122.498634 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.709301, lng: 122.566492 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.753909, lng: 122.572579 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.745715, lng: 122.540808 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.784957, lng: 122.587922 }} />
        )}

      </GoogleMap>
    );
    return (
      <div className="map-section">
        <div ref="map" className="" id="map-size">
          <MapWithASearchBox isMarkerShowns isMarkerShown MarkerShowns />
        </div>

        {/* <div id="outlet-section" className="col-xl-7 col-lg-12 col-md-12 col-xs-12 col-sm-12 px-0 pb-4">
          <div>
            <p className="headline-h4 text-white pl-4 ml-4 w-75 pt-5">400 Outlets Nationwide and Counting</p>
            <img className="pl-5 pt-3" src={rec}></img>
            <p id="outlet-desc" className="body-reg-16 text-white pt-2">Today, Waffle Time boasts of over 400 outlets nationwide and is still actively expanding into new regions and territories. Waffle Time is aiming, from being Ang Pambansang Waffle ng Pilipinas, to become the Best Waffles in the World!</p>
          </div>
        </div> */}
      </div>
    )
  }
}

export default Map;
