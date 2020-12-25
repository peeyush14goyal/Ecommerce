export interface ICategory {
    id:string;
    name:string;
    description:string;
    picture:string;
    priceRange:string;
    isPublished:boolean;
    showOnHomeScreen:boolean;
    parentCategoryId:string;
    displayOrder:number;
}

export interface IPagedCategory {
    currentPage:number;
    rowCount:number;
    pageSize:number;
    categories:Array<ICategory>;
}

export interface ICategorySearch{
    name:string |undefined;
    sortBy:string | undefined;
    sortDirection:string | undefined;
}