import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';


import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

class SinglePost extends React.Component {

    componentDidMount() {
        const {loadSinglePost, resetRequest, match} = this.props;
        loadSinglePost(match.params.id); // i have to include match() to dipslpay single post properly
        resetRequest(); // add post exercise
    }

    render() {
        const { post, request } = this.props;

        if (request.pending === false && request.success === true && post ) {
            return (
                <div>
                    <SmallTitle>{post.title}</SmallTitle>
                    <p>Author: {post.author}</p>
                    <HtmlBox>{post.content}</HtmlBox>
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
        } else if (request.pending === false && request.success === true) {
            return (
                <div>
                    <Alert variant={'info'}>This post don't exist</Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <Alert variant={'info'}>Something went wrong...</Alert>
                </div>
            );
        }
    }

    
}

SinglePost.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        })
    ),
    loadSinglePost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>); //withRouter function used to fix single post display
