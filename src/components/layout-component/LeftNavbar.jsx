import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  //   {
  //     "category_id": "01",
  //     "category_name": "Breaking News"
  //   }

  return (
    <div>
      <h2 className="font-semibold mb-3">All Caterogy ({categories.length})</h2>
      <div className="flex flex-col gap-2 ">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn bg-base-100 border-none"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
