import React from 'react';

export default (<React.Fragment>
  <defs>
    <circle
      id="a"
      cx="12"
      cy="12"
      r="12"
    />
  </defs>
  <g
    fill="none"
    fillRule="evenodd"
  >
    <mask
      id="b"
      fill="#fff"
    >
      <use xlinkHref="#a" />
    </mask>
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke="#2E2E2E"
      mask="url(#b)"
    />
    <ellipse
      cx="12"
      cy="24.5"
      stroke="#2E2E2E"
      mask="url(#b)"
      rx="8"
      ry="7.5"
    />
  </g>
</React.Fragment>);
