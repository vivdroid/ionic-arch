import { BaseApiModel } from './../';
export class UserModel {
    id: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export class GetUserList extends BaseApiModel{
    data: UserModel[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;   
}