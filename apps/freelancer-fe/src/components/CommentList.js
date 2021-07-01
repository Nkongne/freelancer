import React, { Component } from "react";
import { Table } from "reactstrap";
import NewCommentModal from "./NewCommentModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";


class CommentList extends Component {
  render() {
    const comments= this.props.comments;
    return (


      <Table dark>
        <thead>
          <tr>
            <th>message</th>
            <th>image</th>
            <th>commented by</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {!comments || comments.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            comments.map(comment => (
              <tr key={comment.pk}>
                <td>{comment.message}</td>
                <td>{comment.image}</td>
                <td>{comment.freelancer}</td>
                <td align="center">
                  <NewCommentModal
                    create={false}
                    comments={comments}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={comment.pk}
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

export default CommentList;