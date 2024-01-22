import React from "react";

const Categ = () => {
  const data = [
    {
      cateImg: "./assets/brand/brand-1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./assets/brand/brand-3.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./assets/brand/brand-1.png",
      cateName: "Redmi",
    },
    {
      cateImg: "./assets/brand/brand-2.png",
      cateName: "Sony",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead">
          <h1>Markalar</h1>
          <h1>Mağazalar</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div
              style={{ display: "flex", borderRadius: "10px" }}
              className="box brand-box"
              key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>Tüm Markaları Görüntüle</button>
        </div>
      </div>
    </>
  );
};

export default Categ;
