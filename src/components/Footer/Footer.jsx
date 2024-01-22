import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="app-store-play">
        <h1>Dogan Ogulları</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia
          eius est sunt consectetur rem possimus officia minima reiciendis
          perspiciatis! Soluta corrupti nesciunt suscipit repellendus adipisci
          reiciendis veritatis, accusantium saepe?
        </p>
        <div className="icon-footer appstore">
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-google-play"></i>
            <span>Play Store</span>
          </div>
          <div className="img d_flex logo-text">
            <i className="fa-brands fa-app-store-ios"></i>
            <span>App Store</span>
          </div>
        </div>
      </div>
      <div className="">
        <h2>Hakkımızda </h2>
        <ul>
          <li>Karıyer</li>
          <li>Hikayelerimiz</li>
          <li>şartlar & koşullar</li>
          <li>Gizlilik Politikası</li>
        </ul>
      </div>
      <div className="">
        <h2>Müşteri Hizmetleri</h2>
        <ul>
          <li>Yardım Merkezi</li>
          <li>Nasıl alınır</li>
          <li>Siparişinizi takip edin</li>
          <li>Kurumsal & Toplu Satın Alma</li>
          <li>iadeler & geri ödemeler</li>
        </ul>
      </div>
      <div className="">
        <h2>Bize ulaşın</h2>
        <ul>
          <li>Adres</li>
          <li className="contact-info-flex">
            Email :
            <a
              target="_blank"
              href="mailto:arshadchowdhury46@gmail.com"
              className="icon-flex phone-icon">
              mbilalakbaba@gmail.com
            </a>
          </li>
          <li className="contact-info-flex">
            Telefon :{" "}
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=8801317089432"
              className="icon-flex phone-icon">
              +90 000 00 00
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
