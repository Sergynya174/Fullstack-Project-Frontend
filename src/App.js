import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
