export class PageHelper {
  constructor(totalItems: number, page: number, pageSize: number) {
    let totalPages = Math.ceil(totalItems / pageSize);
    let currentPage = page;
    let startPage = currentPage - 5;
    let endPage = currentPage + 4;
    if (startPage <= 0) {
      endPage -= startPage - 1;
      startPage = 1;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      if (endPage > 10) {
        startPage = endPage - 9;
      }
    }

    this.totalItems = totalItems;
    this.currentPage = currentPage;
    this.pageSize = pageSize;
    this.totalPages = totalPages;
    this.startPage = startPage;
    this.endPage = endPage;
  }

  totalItems!: number;
  currentPage!: number;
  pageSize!: number;
  totalPages!: number;
  startPage!: number;
  endPage!: number;
}
