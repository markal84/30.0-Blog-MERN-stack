import React from 'react';
import { PropTypes } from 'prop-types';

import Spinner from '../../common/Spinner/Spinner';
import PostsList from '../PostsList/PostsList';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination'; //pagination exercise

class Posts extends React.Component {

  componentDidMount() {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(1);
  }

  loadPostsPage = (page) => {
    const { loadPostsByPage } = this.props;
    loadPostsByPage(page);
    console.log(page);
  }

  render() {
    const { posts, request, pages } = this.props;
    const { loadPostsPage } = this;
  
    if (request.pending === false && request.success === true && posts.length > 0) {
      return (
          <div>
              <PostsList posts={posts}/>
              <Pagination pages={pages} onPageChange={loadPostsPage}/>; 
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
      author: PropTypes.string.isRequired
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired,
};

export default Posts;