import { useMemo } from "react";

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

const DOTS = "...";

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
};

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const maxDisplayedPages = siblingCount * 2 + 3; // Number of pages to be displayed, including first, last, and current page

    /*
      Case: Only show dots in the middle
    */
    if (totalPageCount <= maxDisplayedPages) {
      return range(1, totalPageCount);
    } else {
      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
      const rightSiblingIndex = Math.min(
        currentPage + siblingCount,
        totalPageCount
      );

      const hasLeftDots = leftSiblingIndex > 2;
      const hasRightDots = rightSiblingIndex < totalPageCount - 1;

      const pages = [];

      if (hasLeftDots) {
        pages.push(1, DOTS);
      }

      pages.push(...range(leftSiblingIndex, rightSiblingIndex));

      if (hasRightDots) {
        pages.push(DOTS, totalPageCount);
      }

      return pages;
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
