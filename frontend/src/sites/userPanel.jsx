import React, {Component} from 'react';
import axios from 'axios';

import Template from './components/template';
import Header from './components/Header';

import Reservations from './components/reservations'
import SingleReservation from './components/singleReservation'
import PostForm from './components/postform'

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

export default class UserPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reservations: []
        }
    }

    postConference(location, details) {
        var component = this;
        console.log(location);
        axios.post("http://94.237.87.26:3031/posts", {
            title: location,
            user: getCookie("user"),
            contents: details
        })
        .then((response) => {
            component.setState((prevState, props) => {
                var newReservation = {title: location, content: details}
                prevState.reservations.unshift(<SingleReservation key={this.state.reservations.length} reservation={newReservation}/>);
                return prevState;
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    componentDidMount() {
        var component = this;
        var reservations = [];
        var i = 0;

        axios.get("http://94.237.87.26:3031/posts?user=" + getCookie("user"))
        .then((response) => {
            console.log(response.data);
            response.data.forEach(reservation => {
                reservations.push(<SingleReservation key={i++} reservation={reservation}/>);
            });
            console.log(reservations);
            component.setState((prevState, props) => {
                return {
                    reservations: reservations.reverse()
                };
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div>
                <Header logged={true} />
                <Template />
                <div style={{ position:"absolute", height: "100%", width: "100%" }}>
                    <div style={{ width: "50%", height: "100%", float: "left"}}>
                        <Reservations reservs={this.state.reservations}></Reservations>
                    </div>
                    <div style={{width: "50%", height: "100%", float: "left"}}>
                        <PostForm submitConf={(location, details) => {this.postConference(location, details)}}></PostForm>
                    </div>
                </div>
            </div>
        );
    }
}