import React from "react";

const Header: React.FC<{ states: IState[] }> = ({ states }) => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="container shadow">
          <span className="title">PRODUCTS</span>
          <div className="items">
            <span className="item">Category</span>
            <span className="item">Sub-Category</span>
          </div>
        </div>
        <div className="container">
          <span className="title title-state">STATE</span>
          <div className="items">
            {states.map((city, i) => (
              <span key={i} className="item">
                {city.state}
              </span>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
