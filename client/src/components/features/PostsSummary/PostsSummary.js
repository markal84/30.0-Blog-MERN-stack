import React from 'react';
import { PropTypes } from 'prop-types';
import '../PostsSummary/PostsSummary.scss';

import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

const PostSummary = ({ id, title, content }) => (
    <article className="post-summary">
      <SmallTitle>{title}</SmallTitle>
      <HtmlBox>{content}</HtmlBox>
      <Button variant="primary">
        Read more
      </Button>
    </article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};

export default PostSummary;