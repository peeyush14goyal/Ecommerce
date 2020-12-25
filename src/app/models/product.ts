export interface IProductSearch {
    name: string;
    sortBy: string;
    sortDirection: string;
}

export interface IPagedProduct {
    currentPage: number;
    rowCount: number;
    pageSize: number;
    products: Array<IProduct>;
}

export interface IProduct {
    id: string;
    name: string;
    shotDescription: string;
    fullDescription: string;
    defaultPicture: string;
    priceRange: string;
    isPublished: boolean;
    oldPrice: string;
    Unit: string;
    categoryId: string;
    displayAvailablity: boolean;
    maximumCartQuantity: string;
    minimumCartQuantity: string;
    pictures: any[]
}