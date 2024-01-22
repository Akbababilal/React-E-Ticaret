import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ErrorNotFound = ({ cartItems }) => {
  return (
    <main>
      <Header cartItems={cartItems} />
      <section className="main-container-error">
        <h1>Hata 404 - Sayfa Bulunamadı</h1>
        <a href="/">Ana Sayfaya geri dön</a>
        <img src="/assets/errornotfound.png" alt="" />
      </section>
      <Footer />
    </main>
  );
};

export default ErrorNotFound;
