import React, { Component } from "react";
import FreelancerService from "../services/FreelancerService"

export default class AddFreelancer extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangePicture = this.onChangePicture.bind(this);
    this.saveFreelancer = this.saveFreelancer.bind(this);
    this.newFreelancer = this.newFreelancer.bind(this);

    this.state = {
        id: 0,
        name: "",
        email: "",
        programming_language: "",
        phone: "",
        picture: "",
        qualification: "",
        registrationDate: "",
        created_by: "",


    };
  }

  onChangeName(e) {
    this.setState({
     name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
    onChangePl(e) {
    this.setState({
      programming_language: e.target.value
    });
  }

    onChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

    onChangePicture(e) {
    this.setState({
      picture: e.target.value
    });
  }
    onChangeQualification(e) {
    this.setState({
      qualification: e.target.value
    });
  }

    onChangeRd(e) {
    this.setState({
      registrationDate: e.target.value
    });
  }

    onChangeCb(e) {
    this.setState({
     created_by: e.target.value
    });
  }
  saveFreelancer() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      programming_languages: this.state.programming_languages,
      phone: this.state.phone,
      picture: this.state.picture,
      qualification:this.state.qualification,
      registrationDate:this.state.registrationDate,
      created_by: this.state.created_by,
    };

    FreelancerService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          programming_language: response.data.programming_language,
          phone: response.data.phone,
          picture:response.data.picture,
          qualification: response.data.qualification,
          registrationDate: response.data.registrationDate,
          created_by: response.data.created_by,

        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newFreelancer() {
    this.setState({
        id: 0,
        name: "",
        email: "",
        programming_language: "",
        phone: "",
        picture: "",
        qualification: "",
        registrationDate: "",
        created_by: "",


    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newFreelancer}>
              create account
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
             <div className="form-group">
              <label htmlFor="title">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

             <div className="form-group">
              <label htmlFor="title">Programming language</label>
              <input
                type="select"
                className="form-control"
                id="pl"
                required
                value={this.state.programming_language}
                onChange={this.onChangePl}
                name="pl"
              />
            </div>

             <div className="form-group">
              <label htmlFor="title">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={this.state.phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>
             <div className="form-group">
              <label htmlFor="title">Picture</label>
              <input
                type="image"
                className="form-control"
                id="picture"
                required
                value={this.state.picture}
                onChange={this.onChangePicture}
                name="picture"
              />
            </div>
             <div className="form-group">
              <label htmlFor="title">qualification</label>
              <input
                type="text"
                className="form-control"
                id="qualification"
                required
                value={this.state.qualification}
                onChange={this.onChangeQualification}
                name="qualification"
              />
            </div>
             <div className="form-group">
              <label htmlFor="title">Registration Date</label>
              <input
                type="date"
                className="form-control"
                id="registrationDate"
                required
                value={this.state.registrationDate}
                onChange={this.onChangeRd}
                name="registrationDate"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Created or Added by</label>
              <input
                type="text"
                className="form-control"
                id="cb"
                required
                value={this.state.created_by}
                onChange={this.onChangeCb}
                name="cb"
              />
            </div>

            <button onClick={this.saveFreelancer} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
