import React from 'react';
import PropTypes from 'prop-types';

import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';

function Bookmark({ isBookmarked }) {
  return isBookmarked ? <FaBookmark /> : <FaRegBookmark />;
}

Bookmark.propTypes = {
  isBookmarked: PropTypes.bool
};

export default Bookmark;
