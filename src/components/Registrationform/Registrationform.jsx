import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Registrationform = () => {
  function handleRegister(event) {
    event.preventDefault();
    return toast.error("Register functionality is not live yet");
  }

  return (
    <section className="loginform">
      <div className="container-login">
        <div className="wrapper">
          <div className="heading-login">
            <h1>Üye Ol</h1>
            <p>
            Zaten kullanıcı mısınız ?{" "}
              <span>
                <Link to="/login">Giriş yapın</Link>
              </span>
            </p>
          </div>
          <form onSubmit={handleRegister} className="form" action="">
            <label className="label name">
              İsim
              <input type="text" name="name" />
            </label>
            <label className="label">
            E-posta
              <input type="text" name="name" />
            </label>
            <label className="label">
              Şifre
              <input type="text" name="password" />
            </label>
            <p className="forgot-pass">
            Kaydolarak şunları kabul etmiş olursunuz:{" "}
              <span>
                <Link to="/termsNconditions">şartlar ve koşullar</Link>
              </span>
            </p>
            <button className="submit-btn">Kayıt Ol</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registrationform;
