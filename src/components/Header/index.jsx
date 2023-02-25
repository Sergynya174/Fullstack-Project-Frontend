import React from "react";
import styles from "./Header.module.css";
import { Container, Button } from "@mui/material";

const Header = () => {
  const isAuth = false;

  const onClickLogout = () => {};

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <a className={styles.logo} href="/">
            <div>Matrosov Blog</div>
          </a>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <a className={styles.link} href="/posts/create">
                  <Button sx={{ marginRight: 1 }} variant="contained">
                    Написать статью
                  </Button>
                </a>
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
                <a className={styles.link} href="/login">
                  <Button sx={{ marginRight: 1 }} variant="outlined">
                    Войти
                  </Button>
                </a>
                <a className={styles.link} href="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </a>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
