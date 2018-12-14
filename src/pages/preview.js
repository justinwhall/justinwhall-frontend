import React, { Component } from 'react';
import { Router } from "@reach/router";

class Preview extends Component {

  state = {
    post: null
  }

  componentDidMount() {
    const {
      id,
      nonce,
    } = this.props;

    fetch(
      `https://pr-1-env-ga-wpgrid.pantheonsite.io/wp-json/postlight/v1/post/preview?id=${id}&_wpnonce=${nonce}&time=${Date.now()}`,
      { credentials: "include" } // required for cookie nonce auth
    )
    .then(res => res.json())
    .then(res => {
        this.setState({
            post: res
        });
    });
  }

  render() {
    console.log(this.state);

    return (
      <div>Preview</div>
    )
  }

}

const PreviewRoutes = (props) => (
  <Router>
    <Preview path="preview/:id/:nonce" />
  </Router>
)

export default PreviewRoutes