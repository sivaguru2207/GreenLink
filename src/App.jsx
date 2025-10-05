import { Route, Routes } from "react-router-dom";
import Flowers from "./Components/Flowers";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Plants from "./Components/Plants";

const App =()=>{

return(
<>
<Navbar/>


  <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plants" element={<Plants />} />
          <Route path="/flowers" element={<Flowers />} />
          <Route path="/about" element={<About/>} />
        </Routes>  

</>
)
}
export default App;