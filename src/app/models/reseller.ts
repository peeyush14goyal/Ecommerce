export interface IPagedReseller {
    currentPage:number;
    rowCount:number;
    pageSize:number;
    resellers:Array<any>;
}


export interface IResellerSearch{
    name:string |undefined;
    email:string | undefined;
    mobile:string | undefined;
    reseller:string | undefined;
    sortBy:string |undefined;
    sortDirection:string | undefined;
}