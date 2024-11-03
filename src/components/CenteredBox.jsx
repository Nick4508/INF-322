import React from 'react';
import '../stylesheets/CenteredBox/CenteredBox.scss';

const CenteredBox = ({ children }) => {
    return (
      <div className="CenteredBox">
        {children}
        <></>
      </div>
    );
  };
  
  export default CenteredBox;