import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Component/ProductCard";
import { Loader, Search } from "lucide-react";

const SearchResulPage = () => {
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState("all");
  const [loading, setLoading] = useState(false);
  const [searchQuery,setSearchQuery] = useState("")

  const category = ["all", "fruit", "drinks", "bakery"];

  useEffect(() => {
    setLoading(true)
    axios
      .get(
        `https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=${cat}`
      )
      .then((response) => {
        setProducts(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false)
      });
  }, [cat]);

  const filteredProducts = products.filter((product) => 
        product.name?.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) ||
        product.type?.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
    )

  return (
    <>
      <div className="w-full py-5 flex justify-center gap-3 flex-wrap mt-18">
        {category.map((item) => (
          <button
            key={item}
            className={`uppercase px-2 py-1 border rounded-md transition-all duration-200
              ${
                cat === item
                  ? "bg-black text-white"
                  : "bg-white text-black border-gray-300"
              }
              hover:bg-black hover:text-white`}
            onClick={() => setCat(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <div className="relative w-80">
          <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
          <input
            type="text"
            placeholder="Search Product"
            className="w-full border border-gray-400 py-2 pl-10 pr-4 rounded-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      

      {loading ? 
       <div className="w-full py-20 flex flex-col items-center justify-center">
          <Loader/> <p className="mt-4">Loading...</p>
        </div>: <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>}
    </>
  );
};

export default SearchResulPage;
