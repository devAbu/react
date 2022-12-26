import { Routes, Route } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetup from "./pages/NewMeetup";
import Favorite from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />}></Route>
          <Route path="/new-meetup" element={<NewMeetup />}></Route>
          <Route path="/favorite" element={<Favorite />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
