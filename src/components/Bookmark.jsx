import React from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa6';

function Bookmark({ isBookmarked }) {
  return isBookmarked ? <FaBookmark /> : <FaRegBookmark />;
}

export default Bookmark;
