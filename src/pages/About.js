import React, { useState } from "react";
import cities from "../data/city.json";
console.log("Logged Output : cities", cities);

const About = () => {
  const [data] = useState([cities]);
  console.log("Logged Output : data", data);

  return (
    <div>
      <div className="card">
        {data[0].map((item, index) => (
          <div className="grid-container" key={index}>
            <div className="grid-item item1">Kathmandu</div>
            <div className="grid-item">Country: {item.country}</div>
            <div className="grid-item">Province: {item.province}</div>
            <div className="grid-item">
              Province Number:{item.province_number}
            </div>
            <div className="grid-item">Wards: {item.wards}</div>
            <div className="grid-item">Zip: {item.zip}</div>
            <div className="grid-item">Area: {item.area}</div>
            <div className="grid-item">Population: {item.population}</div>
            <div className="grid-item">Wards: {item.wards}</div>
            <div className="grid-item">
              Hotels:
              <ul className="list-item">
                {item.hotel.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
