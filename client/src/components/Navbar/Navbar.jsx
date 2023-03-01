import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Link } from "react-router-dom";

import "./Navbar.scss";

const components = (
  <>
    <li>
      <Link className="link" to={"/products/1"}>
        Graphics Card
      </Link>
    </li>
    <li>
      <Link className="link" to={"/products/2"}>
        Processor
      </Link>
    </li>
    <li>
      <Link className="link" to={"/products/3"}>
        Motherboard
      </Link>
    </li>
    <li>
      <Link className="link" to={"/products/4"}>
        Others
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
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
            <ul>
              <span onClick={() => setIsActive(!isActive)}>PC Components</span>
              {isActive && components}
            </ul>
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
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
