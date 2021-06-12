import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPostModal from "./NewPostModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";


class PostList extends Component {
  render() {
    const posts= this.props.posts;
    return (


      <Table dark>
        <thead>
          <tr>
            <th>title</th>
            <th>description</th>

            <th>image</th>
            <th>posted by</th>

            <th></th>
          </tr>
        </thead>
        <tbody>
          {!posts || posts.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            posts.map(post => (
              <tr key={post.pk}>
                <td>{post.title}</td>
                <td>{post.description}</td>
                <td>{post.image}</td>
                <td>{post.freelancer}</td>
                <td align="center">
                  <NewPostModal
                    create={false}
                    posts={posts}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={post.pk}
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

export default PostList;