import React from 'react';
import PropTypes from 'prop-types';

function Qualitie({ color, name }) {
  return (
    <span className={`bg-${color} p-2 rounded-md text-slate-300`}>{name} </span>
  );
}

Qualitie.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string
};

export default Qualitie;
