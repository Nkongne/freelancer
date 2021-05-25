import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import FreelancerList from "./FreelancerList";
import NewFreelancerModal from "./NewFreelancerModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    freelancers: []
  };

  componentDidMount() {
    this.resetState();
  }

  getFreelancers = () => {
    axios.get(API_URL).then(res => this.setState({ freelancers: res.data }));
  };

  resetState = () => {
    this.getFreelancers();
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
          </Col>
        </Row>
        <Row>
          <Col>
            <NewFreelancerModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;