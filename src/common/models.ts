export interface ISearchInput
{
    SearchBy: any;
    SortBy?: any;
}
export interface IQuick
{
    Option: any;
    KeyWord: any;
    ObjectSelected: any;
}
export interface IAdvance
{
    IsUnSign: any;
    IsExact: any;
    DbType: any;
    Query1: any;
    Query2: any;
    Query3: any;
    ObjectSelected: any;
}
export interface IResponseMessage {
    Data: any;
    StatusCode: number;
    Message: string;
    Success: boolean;
}
export interface IDataItems {
    CurrentPage: number;
    PageSize: number;
    PageCount: number;
    RowCount: number;
    Results: any;
}