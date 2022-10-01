import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/home.jsx";
import HotelID from "./pages/hotelID/hotelID.jsx";
import List from "./pages/List/List.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<HotelID/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;