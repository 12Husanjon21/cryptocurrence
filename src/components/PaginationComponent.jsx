// src/components/PaginationComponent.jsx
import React from "react";
import { Pagination } from "flowbite-react";
import { customThemePagination } from "../utils";

const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center my-4">
      <Pagination
        theme={customThemePagination}
        currentPage={currentPage}
        totalPages={totalPages}
        showIcons
        previousLabel=""
        nextLabel=""
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationComponent;
