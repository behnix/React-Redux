import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from '../Actions/postActions'

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id)
    console.log(this.props.history.push('/'))
  }
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
          <div className="btn grey" onClick={this.handleClick}>حذف پست</div>
        </div>
      </div>
    ) : (
      <p className="center">در حال بارگذاری ...</p>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownid) => {
  const id = ownid.match.params.post_id;
  return {
    post: state.posts.find((p) => p.id === parseInt(id)),
  };
};

const mapDispatchToProp = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(deletePost(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProp)(Post);
