import axios from 'axios';

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

export const types = {
    GET_CONFERENCES: "GET_CONFERENCES",
    PUSH_CONFERENCE: "PUSH_CONFERENCE"
};

export const getConferences = () => {
    return function(dispatch) {
        axios.get('http://94.237.87.26:3031/posts?user=' + getCookie('user'))
        .then(posts => {
            dispatch({
                type: types.GET_CONFERENCES,
                payload: posts.data
            });
        });
    }
}

export const pushConference = (location, info) => {
        return function(dispatch) {
        axios.post('http://94.237.87.26:3031/posts', {
            user: getCookie('user'),
            title: location,
            contents: info
        })
        .then(() => {
            dispatch({
                type: types.PUSH_CONFERENCE,
                payload: {
                    title: location,
                    content: info
                }
            });
        });
    };
}

