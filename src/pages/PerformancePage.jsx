import React, { useState } from "react";
import "./PerformancePage.css";

const PerformancePage = () => {
  const [activeEvent, setActiveEvent] = useState("Annual Day");

  const events = {
    "Annual Day": [
      { id: 1, title: "Performance 1", videoUrl: "videos/shiv.mp4" },
      { id: 2, title: "Performance 2", videoUrl: "videos/bollywood.mp4" },
    ],
    "State Competition": [
      { id: 3, title: "State Dance 1", videoUrl: "videos/fusion.mp4" },
      { id: 4, title: "State Dance 2", videoUrl: "videos/Mohiniyattam.mp4" },
    ],
    "Inter Academy": [
      { id: 5, title: "Inter Academy 1", videoUrl: "videos/hiphop.mp4" },
      { id: 6, title: "Inter Academy 2", videoUrl: "videos/tap.mp4" },
    ],
    "Workshop Performances": [
      { id: 7, title: "Workshop 1", videoUrl: "videos/salsa.mp4" },
      { id: 8, title: "Workshop 2", videoUrl: "videos/Yakshagana.mp4" },
    ],
    "Other Events": [
      { id: 9, title: "Other Event 1", videoUrl: "videos/flashmob.mp4" },
      { id: 10, title: "Other Event 2", videoUrl: "videos/flash.mp4" },
    ],
  };

  return (
    <div className="performance-page">
      <div className="hero">
        <h1>Performances</h1>
        <p>Explore videos from various events and competitions</p>
      </div>

      <div className="event-tabs">
        {Object.keys(events).map((eventName) => (
          <button
            key={eventName}
            className={`event-button ${activeEvent === eventName ? "active" : ""}`}
            onClick={() => setActiveEvent(eventName)}
          >
            {eventName}
          </button>
        ))}
      </div>

      <div className="video-gallery">
        {events[activeEvent].map((event) => (
          <div key={event.id} className="video-thumbnail">
            <video
              src={event.videoUrl}
              controls
              width="100%"
              poster="placeholder.jpg" // Optional poster image for the video
            >
              Your browser does not support the video tag.
            </video>
            <h3>{event.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformancePage;
