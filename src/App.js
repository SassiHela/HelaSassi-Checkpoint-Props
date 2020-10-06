import React from "react";
import "./App.css";
import MyProfile from "./Components/Profile/Profile";
import ProfileImg from "./Assets/profileImg.jpg";

function App() {
  const handleName = (e, name) => {
    e.preventDefault();
    alert(`Current user : ${name}`);
  };
  return (
    <>
      <MyProfile
        fullName="Hela Sassi"
        bio="Graduated from Higher School of Managment - Tunis"
        profession="Job seeker"
        handleName={handleName}
      >
        {ProfileImg}
      </MyProfile>
    </>
  );
}
export default App;
