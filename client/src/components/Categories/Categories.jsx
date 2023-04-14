import React from "react";
import { Link } from "react-router-dom";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <div className="cb-1"></div>
          <Link className="link" to="/products/1">
            <button>Sale</button>
          </Link>
        </div>
        <div className="row">
          <div className="cb-2"></div>
          <Link className="link" to="/products/1">
            <button>New Arrivals</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="cb-3"></div>
          <Link className="link" to="/products/1">
            <button>Graphics Card</button>
          </Link>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="cb-4"></div>
              <Link className="link" to="/products/1">
                <button>RAM</button>
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <div className="cb-5"></div>
              <Link className="link" to="/products/1">
                <button>Motherboard</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cb-6"></div>
          <Link className="link" to="/products/1">
            <button>Processor</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
