import React from "react";
import ReactDOM from "react-dom/client";
import DebatePost from "./components/DebatePost";
import Header from "./components/Header";
import LeftSideBar from "./components/LeftSideBar";
import RightSideBar from "./components/RightSideBar";

export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-container">
        <LeftSideBar />
        <div className="feed-container">
          <DebatePost />
        </div>
        <RightSideBar />
      </main>
    </div>
  );
}
