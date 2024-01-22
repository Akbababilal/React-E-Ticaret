import React from 'react';
import './features.css';

const Features = () => {
    const data = [
        {
          cover: 'fa-solid fa-truck-fast',
          title: "Hızlı teslimat",
          desc: "100 milyondan fazla ürünümüzde %100 güvenli ödeme sunuyoruz.",
        },
        {
          cover: 'fa-solid fa-id-card',
          title: "Güvenli Ödeme",
          desc: "100 milyondan fazla ürünümüzde %100 güvenli ödeme sunuyoruz.",
        },
        {
          cover: 'fa-solid fa-shield',
          title: "Güvenle alışveriş yapın",
          desc: "100 milyondan fazla ürünümüz için her yere 24 saat teslimat sunuyoruz.",
        },
        {
          cover: 'fa-solid fa-headset',
          title: "7/24 Destek",
          desc: "100 milyondan fazla ürünümüz için her yere 24 saat teslimat sunuyoruz.",
        },
        {
            cover: 'fa-solid fa-plane',
            title: "Küresel Nakliye",
            desc: "100 milyondan fazla ürünümüz için her yere 24 saat teslimat sunuyoruz.",
          },
          {
            cover: "fa-solid fa-clock",
            title: "24 Saat Teslimat",
            desc: "100 milyondan fazla ürünümüz için her yere 24 saat teslimat sunuyoruz.",
          },
      ]
  return (
    <>
    <section className="wrapper background">
        <div className="container grid2">
            {data.map((value,index)=>{
                return(
                    <div className="product" key={index}>
                        <div className="img icon-circle" >
                            <i className={value.cover}></i>
                        </div>
                        <h3>{value.title}</h3>
                        <p>{value.desc}</p>
                    </div>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default Features