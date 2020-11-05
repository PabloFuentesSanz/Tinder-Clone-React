import React, { useState } from "react";
import "./styles/ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessage] = useState([
    {
      name: "C Tangana",
      imgUrl:
        "https://www.sharefestival.org/wp-content/uploads/2019/03/CTangana.jpg",
      message: "Ey bro",
    },
    {
      name: "C Tangana",
      imgUrl:
        "https://www.sharefestival.org/wp-content/uploads/2019/03/CTangana.jpg",
      message: "Que tal??",
    },
    {
      message: "Aquí ando",
    },
  ]);

  const handleSend = (e) =>{
    e.preventDefault();
    setMessage([...messages, {message: input}]);
    setInput("");
    console.log("hola");
  }

  return (
    <div className="chatScreen">
      <p className="chatMatch">YOU MATCHED WITH </p>
      {messages.map((mes) =>
        mes.name ? (
          <div className="chatScreenMes" >
            <Avatar
              className="chatScreenImg"
              alt={mes.name}
              src={mes.imgUrl}
            ></Avatar>
            <p className="chatScreenText">{mes.message}</p>
          </div>
        ) : (
          <div className="chatScreenMyMess" >
            <p className="chatScreenMyText">{mes.message}</p>
          </div>
        )
      )}

      <div>
        <form className="chatInput" action="">
          <input
          value={input}
          onChange ={(e) => setInput(e.target.value)}
            className="chatInputField"
            placeholder="Type a messsage..."
            type="text"
          />
          <button onClick={handleSend} type="submit" className="chatInputButton">SEND</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
