import React from "react";
import { Card, Hero, Chip, Typo, LoginButton } from "./LoginStyle";

const LoginCard = ({ login }) => {
  const directPage = () => {
    window.location.href = login ? "/register" : "/login";
  };
  return (
    <Card>
      <Hero>
        <h1>Cara terbaru untuk membeli dan menjual mobil</h1>
      </Hero>
      <Chip>
        <Typo>{!login ? "Sudah punya akun?" : "Belum punya akun?"}</Typo>
        <LoginButton onClick={directPage}>
          {!login ? "Masuk" : "Daftar"}
        </LoginButton>
      </Chip>
    </Card>
  );
};

export default LoginCard;
