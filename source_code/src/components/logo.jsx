import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../design/logo.css";

export default class Logo extends React.Component {
  render() {
    return (
      <a href="Home" className="container p-4" id="topLogo">
        &lt; JB <span style={{ color: "yellow" }}> / </span> &gt;
      </a>
    );
  }
}
