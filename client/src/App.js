import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
        <ul>
            {this.state.posts.map(post => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    );
  }
  
  //to test server-client connection
  state = {
    posts: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/posts')
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res });
    });
  }

};



export default App;