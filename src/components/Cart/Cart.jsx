import "./Cart.css";

const Cart = ({
  cartItems,
  addToCart,
  deleteFromCart,
  checkOut,
  removeFromCart,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <section className="cart-items">
        <div className="container cart-flex">
          <div className="cart-details">
            {cartItems.length === 0 && (
              <h1 className="no-items product">
                Sepetinizde hiçbir ürün bulunmamaktadır.
              </h1>
            )}
            {cartItems.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div
                  className="cart-list product d_flex cart-responsive"
                  key={item.id}>
                  <div className="img">
                    <img
                      src={item.img}
                      alt="Picture of this item is unavailable"/>
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      {item.price}.00*{item.qty}
                    </h4>
                    <span>TL{productQty}.00</span>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button onClick={() => removeFromCart(item)}>
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                    <div className="cartControl d_flex">
                      <button
                        className="inCart"
                        onClick={() => addToCart(item)}>
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="delCart"
                        onClick={() => deleteFromCart(item)}>
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>
          <div className="cart-total product-cart">
            <h2>Sepet özeti</h2>
            <div className="d_flex">
              <h4>Toplam fiyat :</h4>
              <h3>{totalPrice}.00 TL</h3>
            </div>
            <button className="checkout" onClick={() => checkOut(cartItems)}>
              Şimdi Ödeme Yap!
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
