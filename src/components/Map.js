import React, { Component } from 'react';
import {
  withGoogleMap,
  GoogleMap,
  InfoWindow,
  Marker,
} from "react-google-maps";
import { Link } from 'react-router';
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: -33.925649, lng: 18.448223 }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        key={index}
        position={marker.position}
        onClick={() => props.onMarkerClick(marker)}
      >
        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
        {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
      </Marker>
    ))}
    </GoogleMap>
));

class MapsComp extends Component {
    // state = {
    //     origin: 41.8507300, -87.6512600,
    //     destination: 41.8525800, -87.6514100,
    //     directions: null,
    // }

    // componentDidMount() {
    //     const DirectionsService = new google.maps.DirectionsService();

    //     DirectionsService.route({
    //     origin: this.state.origin,
    //     destination: this.state.destination,
    //     travelMode: google.maps.TravelMode.DRIVING,
    //     }, (result, status) => {
    //     if (status === google.maps.DirectionsStatus.OK) {
    //         this.setState({
    //         directions: result,
    //         });
    //     } else {
    //         console.error(`error fetching directions ${result}`);
    //     }
    //     });
    // }
    state = {
        markers: [
      {
        position: {lat:-33.930919, lng:18.4038913},
        showInfo: false,
        infoContent: (
            <Link to={'/taxi/2'}>
          <div>Taxi 1</div>
          <div>Driver: Ravi</div>
          </Link>
        )
      },
      { 
        position: {lat:-33.925649, lng:18.4482232},
        showInfo: false,
        infoContent: (
          <Link to={'/taxi/2'}>
            <div>Taxi 2</div>
            <div>Driver: Vusi</div>
          </Link>
        )
      },
    ],
}
handleMarkerClick = this.handleMarkerClick.bind(this);
  handleMarkerClose = this.handleMarkerClose.bind(this);
  // Toggle to 'true' to show InfoWindow and re-renders component
  handleMarkerClick(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: true,
          };
        }
        return marker;
      }),
    });
  }

  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.state.markers.map(marker => {
        if (marker === targetMarker) {
          return {
            ...marker,
            showInfo: false,
          };
        }
        return marker;
      }),
    });
  }

    render() {

        return (
            <div style={{backgroundColor:'#00b1ff', flex:3}}>
                      <SimpleMapExampleGoogleMap
                              onMarkerClick={this.handleMarkerClick}
        onMarkerClose={this.handleMarkerClose}

                      markers={this.state.markers}
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
      />

            </div>
        );
    }
}

export default MapsComp;