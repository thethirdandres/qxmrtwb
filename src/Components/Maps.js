import React from 'react';

// import rec from '../assets/img/rec-yellow.jpg';


import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  google
} from "react-google-maps";


class Maps extends React.Component {

  render() {

    const _ = require("lodash");
    const { compose, withProps, lifecycle } = require("recompose");

    const defaultMapOptions = {
      disableDefaultUI: true,
    };

    const handleToggle = () => {
      this.setState({
        isOpen: !false
      });
    }

    const MapWithASearchBox = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJbpjI8KS7fzlHYDjIBeOL8TkPfEhXUSk&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `70vh` }} />,
        containerElement: <div style={{ height: `70vh` }} />,
        mapElement: <div style={{ height: `70vh` }} />,
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
        center={{ lat: 10.7202, lng: 122.5621 }}
        defaultOptions={defaultMapOptions}
      >
        {props.isMarkerShown && (
          <Marker position={{ lat: 10.7537987, lng: 122.5378174 }} />
        )}
        {props.isMarkerShowns && (
          <Marker position={{ lat: 10.7538192, lng: 122.5394794 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.7520137, lng: 122.5379397 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.7183068, lng: 122.5596691 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.6979304, lng: 122.5680173 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.711603, lng: 122.5506618 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.6973053, lng: 122.5671713 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.70051, lng: 122.5654568 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.6947405, lng: 122.5472622 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.6964249, lng: 122.5636855 }} />
        )}
        {props.MarkerShowns && (
          <Marker position={{ lat: 10.6970144, lng: 122.5669942 }} />
        )}

      </GoogleMap>
    );
    return (
      <div id="map-section" className="row">
        <div className="col-xl-5 col-lg-12 col-md-12 col-xs-12 col-sm-12 px-0">
          <div ref="map" className="" id="map-size">
            <MapWithASearchBox isMarkerShowns isMarkerShown MarkerShowns />
          </div>
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

export default Maps;
