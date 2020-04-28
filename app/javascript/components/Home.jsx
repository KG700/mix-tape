import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import UserList from "./UserList";
import Playlist from "./Playlist";


export default () => (
  <div>
    <Nav />
    <div>Welcome to Mix-tape</div>
    <UserList />
    <Playlist />
  </div>
)
