import React from 'react';
import '../styles/modules/spinner.module.scss';

function Spinner() {
  return (
    <div>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Q2aG01b3hiZDc0NWxoY3IxMXV6NHdsY2x1dGRhamdvcWU1emYwYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sSgvbe1m3n93G/giphy.gif"
        style={{
          width: '100px',
          height: '100px',
          margin: 'auto',
          display: 'block',
        }}
        alt="Loading..."
      />
    </div>
  );
}

export default Spinner;
