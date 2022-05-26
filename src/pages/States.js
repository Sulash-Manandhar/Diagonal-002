import React from "react";
import { useParams, NavLink } from "react-router-dom";

const States = ({ statesDescription }) => {
  let { states } = useParams();

  const districtArray = statesDescription.filter(
    (item) => item.state === states
  );

  return (
    <div className="container-fluid">
      <h2>Welcome to {states}. </h2>
      <span className="small">Click a district to see their information.</span>
      <div>
        <ul>
          {districtArray[0].districts.map((item, index) => (
            <li key={index}>
              <NavLink to={`/${states}/${item}`} className="link-design">
                {item} District
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default States;
