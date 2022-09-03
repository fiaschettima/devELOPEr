import React from "react";
import { Row } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import "./Matches.css";
import { useQuery, useLazyQuery } from "@apollo/client";
import { QUERY_ALL_USER, QUERY_ME } from "../../utils/queries";
import Loader from "../Loader/Loader";
import { Link } from 'react-router-dom';

const MatchesPage = () => {

  const { loading:loadme, data:profile } = useQuery( QUERY_ME );
  
  const { loading:loadall, data:userData } = useQuery(QUERY_ALL_USER);
  const myprofile = profile?.me || {};
  const allUsers = userData

  if (loadme || loadall ) {
    return <Loader />;
  }

  if (!myprofile) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  // console.log(myprofile);
  console.log(allUsers);

  var connectionsArr = myprofile.connections.map(({ _id,}) => _id)
  // var connections = connectionsArr.
  console.log("user connections:",connectionsArr)
  // console.log(connections)
  var matchArr = []
  function profiles(array){
    for(let i=0; i< array.length ; i++){
        matchArr.push(array[i].profile)
    }
    return matchArr
  }
  console.log(profiles(allUsers))


  const db = [
    {
      name: "Richard Hendricks",
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    {
      name: "Erlich Bachman",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFR2mVAx8bkghX04MOTSwnnfoUSD8BlCGNEA&usqp=CAU",
    },
    {
      name: "Monica Hall",
      url: "https://media.vanityfair.com/photos/61fc0e53f5c5a2437d283af6/master/w_2560%2Cc_limit/1199282262",
    },
    {
      name: "Jared Dunn",
      url: "https://pittnews.com/wp-content/uploads/2021/01/C_Cody-Ko_Via.jpg",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://media1.popsugar-assets.com/files/thumbor/gLSZSLj5vDzOv6kno4SYK5I6fLc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/06/03/892/n/46712211/627a8ceb4384d234_MSDTOGU_EC018/i/Tom-Cruise-as-Pete-Maverick-Mitchell-Then.jpg",
    },
  ];


  return (
    <Row className="grid_matches">
      <div className="matches">
        {db.map((match) => (
          <div
            class="card_match"
            style={{ "--bg-image": `url("${match.url}")` }}
          >
            {/* <div
              class="img_match"
              style={{ "--bg-image": `url("${match.url}")` }}
            ></div> */}
            <h1>John Doe</h1>
            <p>
            {/* <Link
              className="btn btn-primary btn-block btn-squared"
              // to={`/profile/${thought._id}`}
            >
              <FaUserCircle size={40} />
            </Link> */}
              <AiFillMessage size={40} />
            </p>
          </div>
        ))}
      </div>
    </Row>
  );
};

export default MatchesPage;


/**
 * render cards
 * cards come from matches
 * matches are where current user connections array and other users connections array contain each other
 *    if logged in user connection array contains 
 * 
 * if I am in other connection array and they are in my array render out card
 * 
 * profile button will 
 */