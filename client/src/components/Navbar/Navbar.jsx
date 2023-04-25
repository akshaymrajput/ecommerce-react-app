import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Link } from "react-router-dom";

import "./Navbar.scss";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="languages" />
            <ExpandMoreIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <ExpandMoreIcon />
          </div>
          <div className="item">
            <div className="components">
              <span>PC Components</span>
              <ul className="components__list">
                <Link className="link" to={"/products/1"}>
                  <li>Graphics Card</li>
                </Link>

                <Link className="link" to={"/products/2"}>
                  <li>Processor</li>
                </Link>

                <Link className="link" to={"/products/3"}>
                  <li>Motherboard</li>
                </Link>

                <Link className="link" to={"/products/4"}>
                  <li>Others</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="center">
          <Link className="link" to={"/"}>
            PC Parts
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon />
            <FavoriteBorderOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
