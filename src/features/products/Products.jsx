import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../products/ProductSlice';
import Product from './Product';
import Pagination from '../../components/Pagination';
import { motion } from "framer-motion"


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products) || [];
  const filteredProducts = useSelector((state) => state.products.filteredProducts) || [];
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 12;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const pageCount = Math.ceil(filteredProducts.length / productsPerPage);

  const displayedProducts = filteredProducts.slice(
    pageNumber * productsPerPage,
    (pageNumber + 1) * productsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <div className="flex flex-wrap justify-start gap-8 min-w-[800px] min-h-[800px] mx-4">
        {displayedProducts.map((product,index) => (
           <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Product product={product} />
          </motion.div>
        ))}
      </div>
      <Pagination pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  );
};

export default Products;
