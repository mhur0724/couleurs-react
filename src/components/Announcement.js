import React, { useState } from "react";
import classes from "./Announcement.module.css";
const Announcement = () => {
  const [announcementIsShown, setAnnouncementIsShow] = useState(true);

  const hideAnnouncement = () => {
    setAnnouncementIsShow(false);
  };
  return (
    <>
      {announcementIsShown && (
        <div className={classes.container}>
          <p>
            <u>Super Deal! Free Shipping on Orders over $150!</u>
          </p>
          <button onClick={hideAnnouncement}>X</button>
        </div>
      )}
    </>
  );
};

export default Announcement;
