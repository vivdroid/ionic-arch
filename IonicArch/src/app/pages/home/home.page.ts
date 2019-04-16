import { Component } from '@angular/core';

import { UserService } from './../../services';
import { UserModel, GetUserList } from '../../models';
import { LoaderService } from '../../providers';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userList: UserModel[] = [];

  constructor(public userService: UserService, 
    public loaderService: LoaderService){

  }

  onClick(){
    this.loaderService.showLoader();
    this.userService.getAll().subscribe((res: any) => {
      this.handleGetAllUserSuccess(res);
    }, (err) => {
      this.handleGetAllUserError(err);
    })
  }

  handleGetAllUserSuccess(res: any){
    console.log('success : '+res);
    this.loaderService.hideLoader();
    let model: GetUserList = res;
    if (model != null && model.data != null) {
      this.userList = model.data;
    }
  }
  
  handleGetAllUserError(err: any){
    console.log('err : '+err);
    this.loaderService.hideLoader();
  }


}
