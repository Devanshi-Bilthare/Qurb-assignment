import React, { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../CartContext";
import { X } from "lucide-react";
import axios from "axios";
import CheckOutDetails from "../Component/CheckOutDetails";

const CheckOutPage = () => {
  const { cart, addToCart, removeFromCart, removeProduct } =
    useContext(CartContext);

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://uxdlyqjm9i.execute-api.eu-west-1.amazonaws.com/s?category=all`
      )
      .then((response) => {
        setAllProducts(response.data);
      })
      .catch((error) => {
        console.alert(error);
      });
  }, []);

  const freeItems = useMemo(() => {
    const freebies = [];

    const coke = cart.find((item) => item.name.toLowerCase() === "coca-cola");
    if (coke) {
      const cokeAvailable = coke.available || 0;
      const totalIncludingFree = coke.quantity + 1;
      if (coke.quantity >= 6 && totalIncludingFree <= cokeAvailable) {
        freebies.push({
          id: coke.id + "-free",
          name: "Coca-Cola (Free)",
          price: "£0",
          quantity: 1,
          img: coke.img,
        });
      }
    }

    const croissant = cart.find(
      (item) => item.name.toLowerCase() === "croissants"
    );
    if (croissant && croissant.quantity >= 3) {
      const coffeeProduct = allProducts.find(
        (product) => product.name.toLowerCase() === "coffee"
      );
      freebies.push({
        id: "free-coffee",
        name: "Coffee (Free)",
        price: "£0",
        quantity: 1,
        img: coffeeProduct?.img,
      });
    }

    return freebies;
  }, [cart]);

  const totalAmount = cart.reduce((total, item) => {
    return total + item.quantity * parseFloat(item.price.replace("£", ""));
  }, 0);

  return (
    <div className="min-h-screen p-4 bg-gray-50 mt-18">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white rounded shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <ul>
            {cart?.map((item) => (
              <li
                key={item.id}
                className="relative flex justify-between items-end border-b py-3"
              >
                <div className="flex gap-5">
                  <div className="w-30 h-20">
                    <img
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.type}</p>
                    <p className="text-sm text-gray-500">{item.price}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="px-2 py-0 border rounded cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-0 border rounded cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  Total: £
                  {(
                    item.quantity * parseFloat(item.price.replace("£", ""))
                  ).toFixed(2)}
                </div>
                <X
                  className="absolute right-0 top-2 cursor-pointer"
                  size={20}
                  onClick={() => removeProduct(item.id)}
                />
              </li>
            ))}
          </ul>
        </div>

        <CheckOutDetails totalAmount={totalAmount} freeItems={freeItems} />
      </div>
    </div>
  );
};

export default CheckOutPage;
