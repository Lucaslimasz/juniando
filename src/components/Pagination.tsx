import {
  Arrow,
  ArrowContainer,
  Container,
  Dots,
  PaginationContainer,
  PaginationItem,
} from "@styles/Components/Pagination";
import { usePagination } from "hooks/usePagination";

import React from "react";

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <Container>
      <PaginationContainer>
        <PaginationItem onClick={onPrevious} disable={currentPage === 1}>
          <ArrowContainer className="leftArrow">
            <Arrow className="left" />
          </ArrowContainer>
        </PaginationItem>
        {paginationRange.map((pageNumber) => {
          if (pageNumber === "...") {
            return (
              <Dots key={pageNumber} className="pagination-item dots">
                &#8230;
              </Dots>
            );
          }
          return (
            <PaginationItem
              key={pageNumber}
              onClick={() => onPageChange(Number(pageNumber))}
              selected={pageNumber === currentPage}
            >
              {pageNumber}
            </PaginationItem>
          );
        })}
        <PaginationItem onClick={onNext} disable={currentPage === lastPage}>
          <ArrowContainer className="rightArrow">
            <Arrow className="right" />
          </ArrowContainer>
        </PaginationItem>
      </PaginationContainer>
    </Container>
  );
};

export default Pagination;
