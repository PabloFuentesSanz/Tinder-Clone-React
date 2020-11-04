import React from "react";
import "./styles/Chats.css";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="C Tangana"
        message="Ey hi"
        timestamp="40 secods ago"
        profilePic="https://www.sharefestival.org/wp-content/uploads/2019/03/CTangana.jpg"
      />
      <Chat
        name="Rosalía"
        message="Trá Trá 😋"
        timestamp="1 minute ago"
        profilePic="https://elintranews.com/wp-content/uploads/2020/07/rosalia-covid-19.jpg"
      />
      <Chat
        name="Patricio"
        message="Vacila un poquito o klk?🎃🎃"
        timestamp="2 minutes ago"
        profilePic="https://cflvdg.avoz.es/default/2020/07/30/00121596099301089857540/Foto/SYG1P20F1_10549.jpg"
      />
    </div>
  );
}

export default Chats;
