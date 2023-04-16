import React from "react";
import Card from "../Card/Card";
import "./List.scss";

const data = [
  {
    id: 1,
    title: "AMD Ryzen 5 5600X CPU Processor",
    img1: "https://m.media-amazon.com/images/I/61vGQNUEsGL._SL1384_.jpg",
    img2: "https://cdn.mdcomputers.in/image/cache/catalog/processor/amd/100-100000065box/100-100000065box-image-main-600x600.jpg",
    price: 299.99,
    oldPrice: 349.99,
    isNew: false,
  },
  {
    id: 2,
    title: "NVIDIA GeForce RTX 3060 Zotac Graphics Card",
    img1: "https://m.media-amazon.com/images/I/7156DLyUsYL._SL1500_.jpg",
    img2: "https://m.media-amazon.com/images/I/71tSwEWVHYL._SL1500_.jpg",
    price: 599.99,
    oldPrice: 649.99,
    isNew: true,
  },
  {
    id: 3,
    title: "Corsair Vengeance LPX 16GB DDR4 RAM Memory",
    img1: "https://m.media-amazon.com/images/I/51eBmm2WniL._SL1200_.jpg",
    img2: "https://elitehubs.com/wp-content/uploads/2023/01/cmk16gx4m2b3600c18-image-main-600x600-1-2.jpg",
    price: 79.99,
    oldPrice: 89.99,
    isNew: false,
  },
  {
    id: 4,
    title: "Samsung 970 Evo Plus 1TB NVMe SSD Solid State Drive",
    img1: "https://m.media-amazon.com/images/I/71+lpIknbIL._SX355_.jpg",
    img2: "https://pcmonster.in/wp-content/uploads/2020/06/81zE8qvJbdL._AC_SL1500_.jpg",
    price: 149.99,
    oldPrice: 179.99,
    isNew: true,
  },
  {
    id: 5,
    title: "ASUS ROG Strix B550-F Gaming ATX Motherboard",
    img1: "https://m.media-amazon.com/images/I/81tAxfNQdwL._SL1500_.jpg",
    img2: "https://dlcdnwebimgs.asus.com/files/media/A710068B-CEA4-4E8B-B4FD-59A0DADB6718/v1/img/kv/pd.png",
    price: 199.99,
    oldPrice: 229.99,
    isNew: true,
  },
];

const List = () => {
  return (
    <div className="list">
      {data?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
