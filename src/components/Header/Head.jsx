import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left-row">
            <a
              target="_blank"
              href="#"
              className="icon-flex phone-icon">
              <i className="fa fa-phone"></i>
              <label className="phone-icon" htmlFor="">
                +90 000 00 00
              </label>
            </a>
            <a
              target="_blank"
              href="#"
              className="icon-flex phone-icon">
              <i className="fa fa-envelope"></i>
              <label className="phone-icon" htmlFor="">
                mbilalakbaba@gmail.com
              </label>
            </a>
          </div>
          <div className="right-row">
            <span>
              <label htmlFor="">Yardıma mı ihtiyacınız var?</label>
            </span>
            <span>
              <label htmlFor="">TR</label>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
