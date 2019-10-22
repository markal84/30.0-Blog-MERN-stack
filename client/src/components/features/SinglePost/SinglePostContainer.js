import { connect } from 'react-redux';
import { getSinglePost, getRequest, loadSinglePostRequest } from '../../../redux/postsRedux';
import SinglePost from './SinglePost';

const mapStateToProps = state => ({
    post: getSinglePost(state),
    request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
    loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)), //it must have an id attribute 
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);