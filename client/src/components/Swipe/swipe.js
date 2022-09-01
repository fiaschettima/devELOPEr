import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import { Row } from "react-bootstrap";
import InterestButton from "../InterestButton/InterestButton";
import data from "../../data/interestsJson";

import "./swipe.css";
const db = [
  {
    name: "Richard Hendricks",
    url: "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=20&m=1133765772&s=612x612&w=0&h=2X073i6UQf9Z6NRxena3em12vhr7I7nromkZk4mfEmk=",
  },
  {
    name: "Erlich Bachman",
    url: "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=20&m=1133765772&s=612x612&w=0&h=2X073i6UQf9Z6NRxena3em12vhr7I7nromkZk4mfEmk=",
  },
  {
    name: "Monica Hall",
    url: "",
  },
  {
    name: "Jared Dunn",
    url: "",
  },
  {
    name: "Dinesh Chugtai",
    url: "https://media.istockphoto.com/vectors/person-gray-photo-placeholder-man-vector-id1133765772?k=20&m=1133765772&s=612x612&w=0&h=2X073i6UQf9Z6NRxena3em12vhr7I7nromkZk4mfEmk=",
  },
];

function Swiper() {
  // const get nearby users
  const users = db;
  const [lastDirection, setLastDirection] = useState();
  const swiped = (direction, nameToDelete) => {
    setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <Row className="grid_swipe">
      <h1>Swipe left for No Right for yes</h1>
      <div className="cards_section">
        <link
          href="https://fonts.googleapis.com/css?family=Damion&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />
        {/* <h1>React Tinder Card</h1> */}
        <div className="cardContainer">
          {users.map((user) => (
            <TinderCard
              className="swipe"
              key={user.name}
              onSwipe={(dir) => swiped(dir, user.name)}
              onCardLeftScreen={() => outOfFrame(user.name)}
            >
              <div className="card">
                <img src={user.url} alt={user.name} className="userImage"></img>
                <h3>{user.name}, 23</h3>
                <hr />
                <div className="interest_section">
                  {" "}
                  {data.slice(0, 4).map((interest) => {
                    return (
                      <InterestButton
                        disabled="true"
                        icon={interest.icon}
                        interest={interest.interest}
                      />
                    );
                  })}
                </div>
                <hr />
              </div>
            </TinderCard>
          ))}
        </div>
        {lastDirection ? (
          <h2 className="infoText">You swiped {lastDirection}</h2>
        ) : (
          <h2 className="infoText" />
        )}
      </div>
    </Row>
  );
}
export default Swiper;