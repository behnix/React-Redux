import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactLogo from "../React.png";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={ReactLogo} alt="Logo" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <h5 className="blue-text lighten-2">{post.title}</h5>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">هیچ مقاله ای ثبت نشده است</div>
    );
    return (
      <div className="container home">
        <h4 className="center blue-text lighten-2">خانه</h4>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps)(Home);
