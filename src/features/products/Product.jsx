import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/products/ProductSlice";
import { totalPrice } from "../products/ProductSlice";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
const Product = ({ product }) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(totalPrice());
    toast.success('ürün eklendi')
  };

  return (
    <div className="w-44 bg-white p-2 block">
      <Link to={`/product-detail/${product.id}`} className="flex flex-col gap-2">
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <span>{product.price} ₺</span>
        </div>
        <div className="text-ellipsis w-full whitespace-nowrap overflow-hidden">
          <span>{product.name}</span>
        </div>
        </Link>
        <button
          className="w-full bg-red-500 dark:bg-gray-400 text-white dark:text-gray-200 z-10"
          onClick={() => {
            handleAddToCart();
          }}
        >
          {t('body.addToCart', 'Add to Cart')}
        </button>

    </div>
  );
};

export default Product;
