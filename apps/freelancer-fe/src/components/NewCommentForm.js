import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL1 } from "../constants";

class NewCommentForm extends React.Component {
  state = {
        pk: 0,
        message: "",
        image: "",
        freelancer: "",


  };

  componentDidMount() {
    if (this.props.comment) {
      const { pk, message, image, freelancer  } = this.props.comment;
      this.setState({ pk, message, image, freelancer });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createComment = e => {
    e.preventDefault();
    axios.post(API_URL1, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editComment = e => {
    e.preventDefault();
    axios.put(API_URL1 + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.comment? this.editComment : this.createComment}>
        <FormGroup>
          <Label for="message">Message:</Label>
          <Input
            type="text"
            name="message"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.message)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">image:</Label>
          <Input
            type="image"
            name="image"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.image)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="freelancer">Freelancer:</Label>
          <Input
            type="select"
            name="freelancer"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.freelancer)}
          />
        </FormGroup>


        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewCommentForm;