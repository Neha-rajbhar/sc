import React, { useState } from "react";
import all from "./Filtered.module.css";
import { useRecoilValue } from "recoil";
import { filteredState } from "../../recoil/atom";

function Filtered() {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("filtered")) || []
  );

  let filteredData = useRecoilValue(filteredState);
  return (
    <div className={all.mainSection}>
      <div className={all.textSection}>
        <h1 className={all.text}>Search Result</h1>
      </div>

      <div className={all.cardSection}>
        {filteredData.map((item) => {
          return (
            <div className={all.card}>
              <img
                className={all.image}
                width="200px"
                height="200px"
                src={item.img}
              />
              <button className={all.type}>{item.type}</button>
              <p>
                Location : {item.location} {item.place}
              </p>
              
              <p>Name : {item.name}</p>
              <p>Address : {item.address}</p>
              <p>Price : {item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Filtered;
