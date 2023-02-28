import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { Container, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { logout, selectIsAuth } from "../../redux/slices/auth";

const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm("Выдействительно хотите выйти?")) {
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Matrosov Blog</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link className={styles.link} to="/add-post">
                  <Button sx={{ marginRight: 1 }} variant="contained">
                    Написать статью
                  </Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  onClick={onClickLogout}
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link className={styles.link} to="/login">
                  <Button sx={{ marginRight: 1 }} variant="outlined">
                    Войти
                  </Button>
                </Link>
                <Link className={styles.link} to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
