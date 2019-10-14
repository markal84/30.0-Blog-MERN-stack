import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import PostsList from '../PostsList/PostsList';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { posts, request } = this.props;
  
    if (request.pending === false && request.success === true && posts.length > 0) {
      return (
          <div>
              <PostsList posts={posts}/>
          </div>
      );
    } else if (request.pending === true || request.success === null) {
      return (
          <div>
              <Spinner/>
          </div>
      );
    } else if (request.pending === false && request.error !== null) {
      return (
          <div>
              <Alert variant={'error'}>{request.error}</Alert>
          </div>
      );
    } else if (request.pending === false && request.success === true && posts.length === 0) {
      return (
          <div>
              <Alert variant={'info'}>No posts</Alert>
          </div>
      );
    } else {
      return (
          <div>
              <Alert variant={'info'}>Error...</Alert>
          </div>
      );
    }
  }

};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
};

export default Posts;