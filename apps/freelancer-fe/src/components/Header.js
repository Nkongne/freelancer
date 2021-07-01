import React, { Component } from "react";
import Style from "./style";



class Header extends Component {
  render() {
    return (


      <div  className="text-center">

        <img
          src="https://logrocket-assets.io/img/logo.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
        />
       <div className="notificationsFrame">
                <div className="panel">
                    <div className="header">
                        <div className="menuIcon">
                            <div className="dashTop"></div>
                            <div className="dashBottom"></div>
                            <div className="circle"></div>
                        </div>
                        <span className="title"></span>
                        {this.props.title}
                        <input type="text" className="searchInput" placeholder="Search ..."/>
                        <div className="fa fa-search searchIcon"></div>
                    </div>
                </div>
       </div>

      </div>
    );
  }
}



export default Header;