import React, { useState } from 'react';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';

export default function HomePage(props) {
  const { products = [], getFiltredProduct, total, currentPage, setCurrentPage, itemsPerPage, getBucket } = props;
  // Set itemsPerPage to 20

  // Calculate total pages based on the fixed itemsPerPage
  const totalPages = Math.ceil(total / itemsPerPage);
  // Function to change the current page
  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // Calculate the range of products for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="cards_page">
      {currentItems.length ? (
        currentItems.map((value, index) => (
          <Cards value={value} key={index} getFiltredProduct={getFiltredProduct} getBucket={getBucket} />
        ))
      ) : (
        <h4 className="text-center">Products not found</h4>
      )}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
    </div>
  );
}
