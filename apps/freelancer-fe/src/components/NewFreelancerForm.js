import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewFreelancerForm extends React.Component {
  state = {
        pk: 0,
        name: "",
        email: "",
        programming_languages: "",
        phone: "",
        picture: "",
        qualification: "",
        registrationDate: "",
        created_by: ""

  };

  componentDidMount() {
    if (this.props.freelancer) {
      const { pk, name, email, programming_languages,phone,picture,qualification,registrationDate,created_by  } = this.props.freelancer;
      this.setState({ pk, name, email, programming_languages, phone,picture,qualification,registrationDate,created_by });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createFreelancer = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editFreelancer = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.freelancer ? this.editFreelancer : this.createFreelancer}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Programming Language:</Label>
          <Input
            type="text"
            name="document"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.programming_languages)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.phone)}
          />
        </FormGroup>


          <FormGroup>
          <Label for="phone">Profile Picture:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.picture)}
          />
        </FormGroup>
          <FormGroup>
          <Label for="phone">CV or portofolio:</Label>
          <Input
            type="text"
            name="phone"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.qualification)}
          />
        </FormGroup>

        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewFreelancerForm;