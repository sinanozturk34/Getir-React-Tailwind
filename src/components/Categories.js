import { useState, useEffect } from "react";
import CategoryData from "api/categories.json"; //api datalrım
import Category from "./UI/Category";
import Title from "./UI/Title";
export default function Categories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    //api geldiginde istek atmam lazım
    setCategories(CategoryData);
    // setTimeout(() =>  setCategories(CategoryData),1000)
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto ">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-10">
          {/* {!categories.length && 'Yükleniyor...'} */}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
}
