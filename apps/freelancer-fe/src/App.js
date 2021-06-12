import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import "whatwg-fetch";

class App extends Component {
  render() {
    return (
      <Fragment>

             <Header title="timeline"/>
           <Header title="profile"/>
           <Header title="setting"/>
           <Header title="chat"/>
        <Home />

      </Fragment>
    );

  }
}

export default App;


