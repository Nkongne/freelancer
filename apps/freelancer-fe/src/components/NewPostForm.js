import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL2 } from "../constants";

class NewPostForm extends React.Component {
  state = {
        pk: 0,
        title: "",
       description: "",

        image: "",
        freelancer: "",


  };

  componentDidMount() {
    if (this.props.post) {
      const { pk, title, description, image, freelancer  } = this.props.post;
      this.setState({ pk, title, description, image, freelancer });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createComment = e => {
    e.preventDefault();
    axios.post(API_URL2, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPost = e => {
    e.preventDefault();
    axios.put(API_URL2 + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.post? this.editPost : this.createPost}>
        <FormGroup>
          <Label for="message">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
          <FormGroup>
          <Label for="message">Description:</Label>
          <Input
            type="textarea"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
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
            onChange={this.onChange.bind(this)}
            value={this.defaultIfEmpty(this.state.freelancer)}
          />
        </FormGroup>


        <Button type={"submit"}>Send</Button>
      </Form>
    );
  }
}

export default NewPostForm;