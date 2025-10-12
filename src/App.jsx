
import { Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden bg-global-bg flex items-center justify-center p-5">
      <div className="w-full  h-full  flex items-center justify-center">
        <div className="w-[360px] h-full relative flex flex-col justify-end  overflow-hidden">

          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path='/account' element={<Account/>}/>
          </Routes>

        </div>
      </div>
    </div>
  );
}

export default App;
