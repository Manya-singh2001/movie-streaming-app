import { Navigate, Route, Routes  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./Context/AuthContext";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <div >
      <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/movie-streaming-app/home" element={<Home />} />
        <Route path="/movie-streaming-app/login" element={<Login />} />
        <Route path="/movie-streaming-app/signUp" element={<SignUp />} />
        <Route path="/movie-streaming-app/account" element={
        <ProtectedRoute> 
          
          <Account />
          </ProtectedRoute> } />
          
          <Route exaxt path='/' element={ <Navigate to="/movie-streaming-app/home" /> }/>
      </Routes>
      </AuthContextProvider>
     
    </div>
  );
}

export default App;
