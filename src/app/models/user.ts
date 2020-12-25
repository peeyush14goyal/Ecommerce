export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRegister {
    name: string;
    mobile:string;
    email: string;
    password: string;
}

export interface IUser {
    id:string;
    name:string;
    email:string;
    dob:string;
    mobile:string;
    address:string;
    pincode:string;
    city:string;
    locality:string;
    state:string;
    accessToken: string;
    expires: number;
    refreshToken:string;
    role:string;
    isActive:string;
}

export interface IUserSearch {
    name: string | undefined;
    mobile:string | undefined;
    email: string | undefined;
    role:string | undefined;
    sortBy:string | undefined;
    sortDirection:string | undefined;
}

export interface IPagedUser {
    currentPage:number;
    rowCount:number;
    pageSize:number;
    users:Array<IUser>;
}