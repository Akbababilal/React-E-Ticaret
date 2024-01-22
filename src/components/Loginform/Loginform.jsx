import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import "./loginform.css";

const Loginform = () => {
  function handleLogin(event) {
    event.preventDefault();
    return toast.error("Login functionality is not live yet");
  }

  return (
    <>
      <section className="loginform">
        <div className="container-login">
          <div className="wrapper">
            <div className="heading-login">
              <h1>Kayıt Ol</h1>
              <p>
                Eğer üye değilseniz{" "}
                <span>
                  <Link to="/registration">Bir hesap oluşturun</Link>
                </span>
              </p>
            </div>
            <form onSubmit={handleLogin} className="form" action="">
              <label className="label">
                E-posta
                <input type="text" name="name" />
              </label>
              <label className="label">
                Şifre
                <input type="text" name="password" />
              </label>
              <p className="forgot-pass">
                Parolanızı mı unuttunuz ?{" "}
                <span>
                  <Link to="/forgot-password">
                    Sıfırlamak için buraya tıklayın
                  </Link>
                </span>
              </p>
              <button className="submit-btn">Giriş Yap</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Loginform;
