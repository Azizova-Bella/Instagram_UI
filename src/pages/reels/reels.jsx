import React from "react";
import "./reels.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const reelsData = [
  {
    id: 1,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    user: "john_doe",
    desc: "Big Buck Bunny 🐰",
  },
  {
    id: 2,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    user: "sara99",
    desc: "Bear Running 🐻",
  },
  {
    id: 3,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
    user: "mike23",
    desc: "Sample 5 sec 🎬",
  },
  {
    id: 4,
    videoUrl: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4",
    user: "anna_k",
    desc: "Sample 10 sec 🎥",
  },
  {
    id: 5,
    videoUrl: "https://samplelib.com/lib/preview/webm/sample-5s.webm",
    user: "leo77",
    desc: "WEBM Format Sample 📼",
  },
];


function Reels() {
  return (
    <div className="reels-wrapper">
      {reelsData.map((reel) => (
        <div className="reel" key={reel.id}>
          <video src={reel.videoUrl} className="reel-video" controls muted loop />
          <div className="reel-icons">
            <FavoriteIcon className="icon" />
            <ChatBubbleOutlineIcon className="icon" />
            <SendIcon className="icon" />
            <BookmarkBorderIcon className="icon" />
            <MoreHorizIcon className="icon" />
          </div>
          <div className="reel-info">
            <strong>@{reel.user}</strong>
            <p>{reel.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reels;
