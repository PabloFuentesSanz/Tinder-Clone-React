import React, { useState, useEffect } from "react";
import "./styles/Cards.css";
import TinderCard from "react-tinder-card";
import Axios from "./axios";

function Cards() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function getData() {
      const req = await Axios.get("/tinder/card");
      setPeople(req.data);
    }
    getData();
  }, []);

  const swiped = (dir, name) => {
    console.log("removing" + name);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

  return (
    <div className="cards">
      <div className="cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.imgUrl})` }}
              >
                <h3 className="personName">{person.name +", "+ person.age}</h3>
              </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
