import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import FreelancerList from "./FreelancerList";
import NewFreelancerModal from "./NewFreelancerModal";
import NewCommentModal from "./NewCommentModal";
import axios from "axios";
import { API_URL} from "../constants";
import { API_URL1} from "../constants";
import { API_URL2} from "../constants";
import CommentList from "./CommentList";
import PostList from "./PostList";
import NewPostModal from "./NewPostModal";

class Home extends Component {
  state = {
    freelancers: [],
    comments: [],
    posts:[]
  };

  componentDidMount() {
    this.resetState();
  }

  getFreelancers = () => {
    axios.get(API_URL).then(res => this.setState({ freelancers: res.data }));
  };

  getComments = () => {
    axios.get(API_URL1).then(res => this.setState({ comments: res.data }));
  };


    getPosts = () => {
    axios.get(API_URL2 ).then(res => this.setState({ posts: res.data }));
  };


  resetState = () => {
    this.getFreelancers();
    this.getComments();
     this.getPosts();
  };





  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <FreelancerList
              freelancers={this.state.freelancers}
              resetState={this.resetState}


            />


            <NewFreelancerModal create={true} resetState={this.resetState} />




    <PostList
              posts={this.state.posts} resetState ={this.resetState}/>

            <NewPostModal create={true} resetState={this.resetState} />


            <CommentList
              comments={this.state.comments} resetState ={this.resetState}/>
            <NewCommentModal create={true} resetState={this.resetState} />
          </Col>

        </Row>

      </Container>
    );
  }
}

export default Home;