import React from 'react';

const Tooltip = ({ children }) => (
  <div className="rbTooltip rounded bg-dark">
    <div className="d-flex col-auto m-1  justify-self-center ">
      <div className="mx-auto text-justify-center">{children}</div>
    </div>
  </div>
);

export default Tooltip;
