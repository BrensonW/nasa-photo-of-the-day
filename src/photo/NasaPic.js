import React, { useState, useEffect } from "react";
import axios from "axios";
import Photo from "./Photo";

const NasaPic = (props) => {
  const [photo, setPhoto] = useState();

  console.log(props);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?date=2020-09-10&api_key=5wqdQ5yxehGolrE0h0ZNEy8TERrumKxnJYewmz8J" 
        // Change the date in this code to see another nasa photo for that specific day
      )
      .then((response) => {
        console.log(response);
        setPhoto(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(photo);
  return (
    <div className="container">
      <Photo photo={photo} />
    </div>
  );
};

export default NasaPic;