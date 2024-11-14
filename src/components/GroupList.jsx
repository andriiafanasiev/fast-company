import React from 'react';
import PropTypes from 'prop-types';

function GroupList({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) {
  return (
    <ul className="w-48 text-sm font-medium gap-1 flex flex-col text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {Object.keys(items).map((item) => (
        <li
          key={items[item][valueProperty]}
          className={
            'block w-full px-4  py-2 rounded-lg cursor-pointer bg-gray-600 hover:bg-gray-200 hover:text-blue-700 focus:outline-none focus:ring-2  focus:ring-blue-700 focus:text-blue-700 dark:hover:bg-gray-500 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white' +
            (items[item] === selectedItem
              ? ' dark:bg-gray-800 dark:border-gray-600'
              : '')
          }
          role="button"
          onClick={() => {
            onItemSelect(items[item]);
          }}
        >
          {items[item][contentProperty]}
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
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object
};

export default GroupList;
