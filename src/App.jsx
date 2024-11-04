import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home /> <Footer />
            </>
          }
        ></Route>

        <Route path="/login" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
