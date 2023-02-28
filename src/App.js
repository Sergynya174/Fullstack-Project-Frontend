import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

function App() {
  const dispanch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    dispanch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/posts/:id/edit" element={<AddPost />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
