import React, { Component,  } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Style from "./components/style";
import "whatwg-fetch";
import StyleTest from "./components/style";
import {Link, Route,Switch} from "react-router-dom";
import NewFreelancerForm from "./components/NewFreelancerForm";
import FreelancerList from "./components/FreelancerList";
import PostList from "./components/PostList";
import CommentList from "./components/CommentList";
import ListFreelancer from "./components/ListFreelancer";
import AddFreelancer from "./components/AddFreelancer";
import Freelancer from "./components/Freelancer"
class App extends Component {
  render() {
    return (
         <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/home" className="navbar-brand">
            Home
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/post"} className="nav-link">
                Brand new post
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/freelancer"} className="nav-link">
                freelancer registration
              </Link>
            </li>
              <li className="nav-item">
              <Link to={"/freelancers"} className="nav-link">
                freelancers
              </Link>

            </li>
            <li>
               <Link to={"/comment"} className="nav-link">
                comments
              </Link>
            </li>
            <li>
               <Link to={"/login"} className="nav-link">
                login<login/>
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/freelancer" component={AddFreelancer} />
            <Route path="/freelancers" component={ListFreelancer} />
            <Route path="/post" component={PostList} />
            <Route path="/comment" component={CommentList} />

          </Switch>
        </div>
         </div>



    );

  }
}

export default App;


