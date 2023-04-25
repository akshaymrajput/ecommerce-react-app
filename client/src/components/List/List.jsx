import React from "react";
import Card from "../Card/Card";
import "./List.scss";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, categoryID }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryID}${subCats
      .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
      .join("")}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "Loading..."
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
