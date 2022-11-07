import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorite from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />}></Route>
        <Route path="/new-meetup" element={<NewMeetup />}></Route>
        <Route path="/favorite" element={<Favorite />}></Route>
      </Routes>
    </div>
  );
}

export default App;
