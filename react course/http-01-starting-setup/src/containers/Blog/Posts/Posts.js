import React, { Component } from "react";
import axios from "axios";
import { Route, Link } from "react-router-dom";
import Post from "../../../components//Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
  state = {
    posts: [],
    error: false
  };

  componentDidMount() {
    //console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => ({
          ...post,
          author: "Max"
        }));
        this.setState({ posts: updatedPosts }); //console.log(reponse));
      })
      .catch(error => this.setState({error: true}));
  }

  selectedPostHandler = id => this.setState({ selectedPostId: id }); //console.log(reponse));

  render() {
    let posts = (
      <p style={{ textAlign: "center" }}>Opps, something went wrong..</p>
    );
    if (!this.state.error)
      posts = this.state.posts.map(post => (
        <Link key={post.id} to={"/posts/" + post.id}>
          <Post
            title={post.title}
            author={post.author}
            clicked={() => this.selectedPostHandler(post.id)}
          />
        </Link>
      ));

    return (
      <div>
        <section className="Posts">{posts}</section>
        <Route
          path={this.props.match.url + "/:postId" }
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
