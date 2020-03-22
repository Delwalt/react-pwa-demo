import React, { Component } from "react";
import "./App.css";

const api = "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=20";
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: false
    };
  }
  componentDidMount() {
    fetch(api)
      .then(response => response.json())
      .then(data => this.setState({ data, error: null, loading: false }))
      .catch(error => this.setState({ loading: false, error: true }));
  }

  render() {
    const { data, loading, error } = this.state;
    const allFeeds =
      data &&
      data.map(feed => {
        return (
          <div className="feedCard" key={feed.id}>
            <img src={feed.url} alt="Dummy" />
            <h5>{feed.title}</h5>
          </div>
        );
      });

    return (
      <div>
        {/* // Header */}
        <nav className="header">
          <h1 className="logo">PWA Application Demo</h1>
        </nav>

        {/* // Feeds */}
        <div className="container">
          <h1>Feeds</h1>
          <div className="feedList">
            {(loading && "Loading...") ||
              (error && "Error while loading feeds") ||
              allFeeds}
          </div>
        </div>
      </div>
    );
  }
}
export default Feed;
