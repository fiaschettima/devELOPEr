import "./App.css";
import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SignUp from "./components/SignUp/SignUp";
import Leetcode from "./components/Leetcode/Leetcode";
import Sidebar from "./components/Sidebar/Sidebar";
import { Col, Row } from "react-bootstrap";
require('dotenv').congif();

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
// https://www.apollographql.com/docs/react/api/link/apollo-link-context/
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

import PubNub from "pubnub";
import { PubNubProvider } from "pubnub-react";
import { Chat, MessageList, MessageInput } from "@pubnub/react-chat-components";
import { isRequiredArgument } from "graphql";

const pubnub = new PubNub({
  publishKey: process.env.MY_PUBLISH_KEY,
  subscribeKey: process.env.MY_SUBSCRIBE_KEY,
  uuid: "myFirstUser",
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <Background>
        <Header />
        <Row>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<LoginPage />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </BrowserRouter>
          <Col md={1}>
            <Sidebar />
          </Col>
          <Col md={11}>
            {" "}
            <BrowserRouter>
              <Routes>
                <Route path="/leetcode" element={<Leetcode />} />
              </Routes>
            </BrowserRouter>
          </Col>
        </Row>
      </Background>

      <Layout />
    </ApolloProvider>
  );
}

export default App;
