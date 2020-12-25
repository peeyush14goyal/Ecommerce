export interface Reseller {
    id: string;
    name: string;
    address: string;
    pincode: string;
    city: string;
    locality: string;
    state: string;
}

export interface ICustomer {
    id: string;
    name: string;
    email: string;
    dob: string;
    mobile: string;
    address: string;
    pincode: string;
    city: string;
    locality: string;
    state: string;
    isComplete: boolean;
    reseller: Reseller;
}

export interface IPagedCustomer {
    currentPage:number;
    rowCount:number;
    pageSize:number;
    customers:Array<ICustomer>;
}

export interface ICustomerSearch{
    name:string |undefined;
    email:string | undefined;
    mobile:string | undefined;
    reseller:string | undefined;
    sortBy:string |undefined;
    sortDirection:string | undefined;
}