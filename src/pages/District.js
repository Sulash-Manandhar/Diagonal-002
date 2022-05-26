import React from "react";
import { useParams, NavLink } from "react-router-dom";
import cities from "../data/city.json";

const District = () => {
  const { states, district } = useParams();

  const citiesArray = Object.entries(cities);
  let districtData = [];

  for (let i = 0; i < citiesArray.length; i++) {
    if (citiesArray[i][0] === district) {
      districtData = citiesArray[i][1];
      break;
    }
  }

  const handleVisited = () => {
    for (let i = 0; i < citiesArray.length; i++) {
      if (citiesArray[i][0] === district) {
        citiesArray[i][1].visited = !citiesArray[i][1].visited;
        break;
      }
    }
    console.log(citiesArray);
  };

  return (
    <div className="container-fluid ">
      <h2>
        Welcome to the {district} district of
        <NavLink to={`/${states}`}> {states} </NavLink>
        district.
      </h2>

      <div className="grid-display">
        <div className="grid-item grid-heading">{district}</div>
        {/* 1st grid  */}
        <div className="grid-item grid-title">Country:</div>
        <div className="grid-item">{districtData.country}</div>
        {/* 2nd grid  */}
        <div className="grid-item grid-title">Province:</div>
        <div className="grid-item">{districtData.province}</div>
        {/* 3nd grid  */}
        <div className="grid-item grid-title">Province Number:</div>
        <div className="grid-item">{districtData.province_number}</div>
        {/* 4nd grid  */}
        <div className="grid-item grid-title">Number of Population:</div>
        <div className="grid-item">{districtData.population}</div>
        {/* 5nd grid  */}
        <div className="grid-item grid-title">Total Areas:</div>
        <div className="grid-item">
          {districtData.area} km<sup>2</sup>
        </div>
        {/* 6nd grid  */}
        <div className="grid-item grid-title">Zip Code:</div>
        <div className="grid-item">{districtData.zip}</div>
        {/* 7nd grid  */}
        <div className="grid-item grid-title">Number of Wards:</div>
        <div className="grid-item">{districtData.wards}</div>
        {/* 8nd grid  */}
        {districtData.hotel.length ? (
          <>
            <div className="grid-item grid-title">Hotels:</div>
            <div className="grid-item ">
              <ul className="grid-list">
                {districtData.hotel.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
        {/* 9nd grid  */}
        <div className="grid-item grid-title">Zoo</div>
        <div className="grid-item ">
          {districtData.attractions.zoo ? "Available" : "Not Available"}
        </div>
        {/* 10nd grid  */}
        <div className="grid-item grid-title">QFX</div>
        <div className="grid-item ">
          {districtData.attractions.qfx ? "Available" : "Not Available"}
        </div>
        {/* 11nd grid  */}
        {districtData.attractions.parks.length ? (
          <>
            <div className="grid-item grid-title">Parks:</div>
            <div className="grid-item ">
              <ul className="grid-list">
                {districtData.attractions.parks.map((item, index) => (
                  <div key={index} className="flex">
                    <img
                      src={item.image}
                      alt="some"
                      width="100px"
                      height="auto"
                    />
                    <div>
                      <h4>{item.name}</h4>
                      <span>Location:{item.address}</span>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
          </>
        ) : null}

        {/* 12nd grid  */}
        {districtData.attractions.stadium.length ? (
          <>
            <div className="grid-item grid-title">Stadium:</div>
            <div className="grid-item ">
              <ul className="grid-list">
                {districtData.attractions.stadium.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
      </div>

      <div className="checkbox-container">
        <input
          type="checkbox"
          name="visited"
          id="isVisited"
          onChange={handleVisited}
          defaultChecked={districtData.visited}
        />
        <label htmlFor="isVisited">Did you visit this place?</label>
        <br />
        <span className="small">
          Checking the checkbox will update the status.
        </span>
      </div>
    </div>
  );
};

export default District;
