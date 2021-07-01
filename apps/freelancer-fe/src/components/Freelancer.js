import React, { Component } from "react";
import FreelancerService from "../services/FreelancerService"

export default class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.getFreelancer = this.getFreelancer.bind(this);
    this.updateRegistrationDate = this.updateRegistrationDate.bind(this);
    this.updateFreelancer = this.updateFreelancer.bind(this);
    this.deleteFreelancer = this.deleteFreelancer.bind(this);

    this.state = {
      currentFreelancer: {
        id: 0,
        name: "",
        email: "",
        programming_language: "",
        phone: "",
        picture: "",
        qualification: "",
        registrationDate: "",
        created_by: "",

      },
      message: ""
    };
  }

  componentDidMount() {
    this.getFreelancer(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentFreelancer: {
          ...prevState.currentFreelancer,
          name: name
        }
      };
    });
  }

  onChangeEmail(e) {
    const email = e.target.value;

    this.setState(prevState => ({
      currentFreelancer: {
        ...prevState.currentFreelancer,
        email: email
      }
    }));
  }

  getFreelancer(id) {
    FreelancerService.get(id)
      .then(response => {
        this.setState({
          currentFreelancer: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateRegistrationDate(status) {
    var data = {
      id: this.state.freelancer.id,
      name: this.state.freelancer.name,
      email: this.state.currentFreelancer.email,

    };

   FreelancerService.update(this.state.currentFreelancer.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentFreelancer: {
            ...prevState.currentFreelancer,

          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateFreelancer() {
   FreelancerService.update(
      this.state.currentFreelancer.id,
      this.state.currentFreelancer
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The freelancer was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteFreelancer() {
   FreelancerService.delete(this.state.currentFreelancer.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/freelancer')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
     const { currentFreelancer } = this.state;

    return (
      <div>
        {currentFreelancer ? (
          <div className="edit-form">
            <h4>Freelancer</h4>
              <form>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentFreelancer.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={currentFreelancer.email}
                  onChange={this.onChangeEmail}
                />
              </div>

                 <div className="form-group">
                <label htmlFor="pl">Programming languages</label>
                <input
                  type="text"
                  className="form-control"
                  id="pl"
                  value={currentFreelancer.programming_language}
                  onChange={this.onChangePl}
                />

                 </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteFreelancer}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateFreelancer}
            >
              Update
            </button>
            <p>{this.state.message}</p>
            </div>
        ): (
          <div>
            <br />
            <p>Please click on a Freelancer..</p>
          </div>
        )}
          </div>
        );
  }
}
