import React, { useState } from "react";
import AllRoutes from "./allroutes/AllRoutes";
import FlashDealsData from "./components/FlashDeals/flashDealsData";
import ShopData from "./components/Shop/shopData";
import AllProductsData from "./components/Allproducts/allProductsData";
import toast, { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  const { productItems } = FlashDealsData;
  const { shopItems } = ShopData;
  const { allProductsData } = AllProductsData;
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty + 1 }
            : item
        )
      );
      toast.success("Ürün miktarı artırıldı");
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      toast.success("Ürün sepete eklendi");
    }
  };
  const deleteFromCart = (product) => {
    const productExists = cartItems.find((item) => item.id === product.id);
    if (productExists.qty === 1) {
      const shouldRemove = window.confirm(
        "Bu ürünü sepetten çıkarmak istediğinizden emin misiniz?"
      );

      if (shouldRemove) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        toast.success("Item removed from cart");
      }
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExists, qty: productExists.qty - 1 }
            : item
        )
      );
      toast.success("Öğe miktarı azaldı");
    }
  };
  const checkOut = (cartItems) => {
    if (cartItems.length <= 0) {
      toast.error("Ödeme yapmak için sepete bir ürün ekleyinß");
    } else {
      const confirmOrder = window.confirm(
        "Bu ürünlerin tamamını sipariş etmek istediğinizden emin misiniz?");

      if (confirmOrder) {
        setCartItems([]);
        toast.success("Sipariş verildi, Teşekkürler!!");
      }
    }
  };

  const removeFromCart = (product) => {
    const shouldRemove = window.confirm(
      "Bu ürünü sepetten çıkarmak istediğinizden emin misiniz?"
    );

    if (shouldRemove) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
      toast.success("Ürün sepetten kaldırıldı");
    }
  };

  return (
    <>
      <Toaster />
      <AllRoutes
        removeFromCart={removeFromCart}
        productItems={productItems}
        cartItems={cartItems}
        addToCart={addToCart}
        shopItems={shopItems}
        deleteFromCart={deleteFromCart}
        checkOut={checkOut}
        allProductsData={allProductsData}
      />
    </>
  );
}

export default App;
