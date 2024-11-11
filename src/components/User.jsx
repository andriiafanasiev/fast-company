import React from 'react';
import Qualitie from './Qualitie';
import Bookmark from './Bookmark';
import PropTypes from 'prop-types';

function User({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  onDelete,
  onBookmark,
  isBookmarked
}) {
  return (
    <tr
      key={_id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {name}
      </th>
      <td className="px-6 py-4 gap-2 flex">
        {qualities.map((qualitie) => {
          return <Qualitie key={qualitie._id} {...qualitie} />;
        })}
      </td>
      <td className="px-6 py-4">{profession.name}</td>

      <td className="px-6 py-4">{completedMeetings}</td>
      <td className="px-6 py-4">{rate} / 5</td>
      <td className="px-6 py-4">
        <button
          onClick={() => onBookmark(_id)}
          className="bg-green-800 text-white px-4 py-2 rounded-sm"
        >
          <Bookmark isBookmarked={isBookmarked} />
        </button>
      </td>
      <td className="px-6 py-4">
        <button
          onClick={() => {
            onDelete(_id);
          }}
          className="bg-red-800 text-white px-4 py-2 rounded-sm"
        >
          delete
        </button>
      </td>
    </tr>
  );
}

User.propTypes = {
  _id: PropTypes.number,
  name: PropTypes.string,
  profession: PropTypes.string,
  qualities: PropTypes.array,
  completedMeetings: PropTypes.number,
  rate: PropTypes.number,
  onDelete: PropTypes.func,
  onBookmark: PropTypes.func,
  isBookmarked: PropTypes.bool
};

export default User;
