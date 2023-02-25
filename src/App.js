import "./App.css";
import Header from "./components/Header";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
        {/* <FullPost />
        <Registration />
        <AddPost />
        <Login /> */}
      </Container>
    </>
  );
}

export default App;
