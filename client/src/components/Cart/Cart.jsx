import React from "react";
import "./Cart.scss";

import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      title: "AMD Ryzen 5 5600X CPU Processor",
      desc: "AMD Ryzen 5 5600X CPU Processor",
      img1: "https://m.media-amazon.com/images/I/61vGQNUEsGL._SL1384_.jpg",
      img2: "https://cdn.mdcomputers.in/image/cache/catalog/processor/amd/100-100000065box/100-100000065box-image-main-600x600.jpg",
      price: 299.99,
      oldPrice: 349.99,
      isNew: false,
    },
    {
      id: 2,
      title: "NVIDIA GeForce RTX 3060 Zotac Graphics Card",
      desc: "NVIDIA GeForce RTX 3060 Zotac Graphics Card",
      img1: "https://m.media-amazon.com/images/I/7156DLyUsYL._SL1500_.jpg",
      img2: "https://m.media-amazon.com/images/I/71tSwEWVHYL._SL1500_.jpg",
      price: 599.99,
      oldPrice: 649.99,
      isNew: true,
    },
  ];

  return (
    <div className="cart">
      <h2>Products in your cart</h2>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img1} alt="" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="empty">Empty Cart</span>
    </div>
  );
};

export default Cart;
