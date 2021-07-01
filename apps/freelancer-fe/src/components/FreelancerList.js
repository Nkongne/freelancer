import React, { Component } from "react";
import { Table } from "reactstrap";
import NewFreelancerModal from "./NewFreelancerModal";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ConfirmRemovalModal from "./ConfirmRemovalModal";


class FreelancerList extends Component {
  render() {
    const freelancers = this.props.freelancers;
    return (


      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Programming Languages</th>
            <th>Phone</th>
            <th>Picture</th>
            <th>CV or Portofolio</th>
            <th>Registration Date</th>
            <th>Added by</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!freelancers || freelancers.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            freelancers.map(freelancer => (
              <tr key={freelancer.pk}>
                <td>{freelancer.name}</td>
                <td>{freelancer.email}</td>
                <td>{freelancer.programming_languages}</td>
                <td>{freelancer.phone}</td>
                <td>{freelancer.picture}</td>
                <td>{freelancer.qualification}</td>
                <td>{freelancer.registrationDate}</td>
                <td>{freelancer.created_by}</td>
                <td align="center">
                  <NewFreelancerModal
                    create={false}
                    freelancers={freelancers}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={freelancer.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
       
    );
  }
}

export default FreelancerList;