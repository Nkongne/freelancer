import React, { Component } from "react";
import FreelancerDataService from "../services/FreelancerService"
import { Link } from "react-router-dom";

export default class ListFreelancer extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveFreelancers = this.retrieveFreelancers.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveFreelancer = this.setActiveFreelancer.bind(this);
    this.removeAllFreelancers = this.removeAllFreelancers.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      freelancers: [],
      currentFreelancer: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveFreelancers();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveFreelancers() {
   FreelancerDataService.getAll()
      .then(response => { 
        this.setState({
          freelancers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveFreelancers();
    this.setState({
      currentFreelancer: null,
      currentIndex: -1
    });
  }

  setActiveFreelancer(freelancer, index) {
    this.setState({
      currentFreelancer: freelancer,
      currentIndex: index
    });
  }

  removeAllFreelancers() {
    FreelancerDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
   FreelancerDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          freelancers: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
     const { searchName, freelancers, currentFreelancer, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Freelancers List</h4>

          <ul className="list-group">
            {freelancers &&
              freelancers.map((freelancer, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveFreelancer(freelancer, index)}
                  key={index}
                >
                  {freelancer.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllFreelancers}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentFreelancer ? (
            <div>
              <h4>Freelancer</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentFreelancer.name}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentFreelancer.email}
              </div>
              <div>
                <label>
                  <strong>Programming Languages:</strong>
                </label>{" "}
                {currentFreelancer.programming_languages }
              </div>
                <div>
                <label>
                  <strong>Phone:</strong>
                </label>{" "}
                {currentFreelancer.phone }
              </div>
                <div>
                <label>
                  <strong>Picture:</strong>
                </label>{" "}
                {currentFreelancer.picture}
              </div>
                <div>
                <label>
                  <strong>Qualification:</strong>
                </label>{" "}
                {currentFreelancer.qualification }
              </div>
                <div>
                <label>
                  <strong>Registration date:</strong>
                </label>{" "}
                {currentFreelancer.registrationDate }
              </div>
              <Link
                to={"/freelancer/" + currentFreelancer.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Freelancer..</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}