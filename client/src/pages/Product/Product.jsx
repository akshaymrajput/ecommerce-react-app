import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Product = () => {
  const categoryID = parseInt(useParams().id);
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img1");
  const [quantity, setQuantity] = useState(1);

  const upload = import.meta.env.VITE_REACT_APP_UPLOAD_URL;

  const { data, loading, error } = useFetch(
    `/products?populate=*&/product/=${id}`
  );

  let currentProductData = [];

  data?.map((item) => {
    if (item.id == id) {
      currentProductData = item;
    }
  });

  return (
    <div className="product">
      {loading ? (
        "Loading..."
      ) : (
        <>
          <div className="left">
            <div className="itemImages">
              <img
                src={
                  upload +
                  currentProductData?.attributes?.img1?.data?.attributes?.url
                }
                alt="productThumbnail 1"
                onClick={(e) => setSelectedImg("img1")}
              />
              <img
                src={
                  upload +
                  currentProductData?.attributes?.img2?.data?.attributes?.url
                }
                alt="productThumbnail 2"
                onClick={(e) => setSelectedImg("img2")}
              />
            </div>
            <div className="mainImage">
              <img
                src={
                  upload +
                  currentProductData?.attributes?.[selectedImg]?.data
                    ?.attributes?.url
                }
                alt="productImage"
              />
            </div>
          </div>
          <div className="right">
            <h1>{currentProductData?.attributes?.title}</h1>
            <span className="price">
              ₹{currentProductData?.attributes?.price}
            </span>
            <p>{currentProductData?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon /> ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon /> ADD TO COMPARE
              </div>
            </div>
            <div className="info">
              <span className="manufacturer">
                <span>Manufacturer: </span>
                <span>
                  {
                    currentProductData?.attributes?.sub_categories?.data?.[0]
                      ?.attributes?.title
                  }
                </span>
              </span>
            </div>
            <hr />
            <div className="info">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
