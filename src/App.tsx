import React from "react";
import "./App.css";
import AddComment from "./components/AddComment";
import AnnouncementCard, {
  IAnnouncementType,
} from "./components/AnnouncementCard";
import announcementCards from "./utils/announcementCards";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{marginBottom: "20px"}}>
        <label>Some interesting ballers...</label>
      </header>
      <main>
        {
          <div style={{ display: "flex", width: "100vw", paddingLeft: "270px", gap: "20px" }}>
            {announcementCards.map((item: IAnnouncementType) => {
              return <AnnouncementCard item={item} />;
            })}
          </div>
        }
        <p style={{marginBottom: "20px"}}>Add Your Baller below:</p>
        <AddComment />
      </main>
    </div>
  );
}

export default App;
