import React from 'react';
import PropTypes from 'prop-types';

function SearchStatus({ usersCount }) {
  function renderPhrase(usersCount) {
    const lastDigit = usersCount % 10;
    const lastTwoDigits = usersCount % 100;

    if (lastTwoDigits > 10 && lastTwoDigits < 20) {
      return `${usersCount} людей тусане з тобою сьогодні`;
    }

    if (lastDigit === 1) {
      return `${usersCount} людина тусане з тобою сьогодні`;
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return `${usersCount} людини тусануть з тобою сьогодні`;
    }

    return `${usersCount} людей тусане з тобою сьогодні`;
  }
  return (
    <div>
      <h2 className="text-white font-semibold py-4 px-7 bg-blue-500">
        {renderPhrase(usersCount)}
      </h2>
    </div>
  );
}

SearchStatus.propTypes = {
  usersCount: PropTypes.number
};

export default SearchStatus;
