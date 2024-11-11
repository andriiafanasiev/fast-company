import React from 'react';

function Qualitie({ color, name }) {
  return (
    <span className={`bg-${color} p-2 rounded-md text-slate-300`}>{name} </span>
  );
}

export default Qualitie;
