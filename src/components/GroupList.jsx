import React from 'react';
import PropTypes from 'prop-types';

function GroupList({ items, valueProperty, contentProperty }) {
  return (
    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className="mb-2 bg-gray-100 dark:bg-gray-600 rounded-lg"
        >
          <a
            href="#"
            className="block w-full px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
          >
            {items[item][contentProperty]}
          </a>
        </li>
      ))}
    </ul>
  );
}
GroupList.defaultProps = {
  valueProperty: '_id',
  contentProperty: 'name'
};

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired
};

export default GroupList;
