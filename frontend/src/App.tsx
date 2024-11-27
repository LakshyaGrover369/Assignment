import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ShowCards from "./pages/ShowCards";
import Resources from "./pages/subPages/Resources";
import Requests from "./pages/subPages/Requests";
import Users from "./pages/subPages/Users";
import AddItem from "./pages/AddItem";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShowCards />}>
          <Route index element={<Resources />} />
          <Route path="resources" element={<Resources />} />
          <Route path="request" element={<Requests />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route path="/additem" element={<AddItem />} />
        <Route path="*" element={<h1>404 ! NOT FOUND!</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
