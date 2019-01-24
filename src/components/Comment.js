import React, { Component } from 'react';

class Comment extends Component {
  remove = () => {
    this.props.deleteComment(this.props.comment.commentId);
  };

  render() {
    return (
      <div className="media">
        <div className="media-body">{this.props.comment.comment}</div>
        <i
          className="far fa-trash-alt float-right ml-3 align-self-center"
          style={{ color: 'red' }}
          onClick={this.remove}
        />
      </div>
    );
  }
}

export default Comment;