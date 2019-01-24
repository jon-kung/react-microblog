import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PostForm from './PostForm';
import CommentsSection from './CommentsSection';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { editView: false };
  }

  handleEdit = () => {
    this.setState({ editView: true });
  };

  remove = () => {
    const id = this.props.match.params.postId;
    this.props.deletePost(id);
  };

  render() {
    // get the id of the and find the post in the posts array
    const id = this.props.match.params.postId;
    let post = this.props.posts.find(p => p.id === id);
    if (!post) return <Redirect to="/" />;

    // can destructure to clean up this.props

    return (
      <div>
        {this.state.editView ? (
          <PostForm post={post} editPost={this.props.editPost} />
        ) : (
          <div className="media">
            <div className="media-body">
              <h4 className="mt-0 mb-1">{post.title}</h4>
              <h6>{post.description}</h6>
              <p> {post.body} </p>
            </div>
            <i
              className="far fa-trash-alt float-right m-1 align-self-center"
              style={{ color: 'red' }}
              onClick={this.remove}
            />
            <i
              className="fas fa-edit float-right m-1 align-self-center"
              style={{ color: 'dodgerblue' }}
              onClick={this.handleEdit}
            />
          </div>
        )}
        <CommentsSection
          post={post}
          comments={this.props.comments}
          addComment={this.props.addComment}
          deleteComment={this.props.deleteComment}
        />
      </div>
    );
  }
}

export default Post;