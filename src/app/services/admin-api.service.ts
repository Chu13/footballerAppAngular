import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Admin {
   // sign up form
   placeName: string;
   phone: string;
   location: string;
   fields: string;

   // sign up & log in forms
   email: string;
   password: string;

   // assigned by the database
   _id: string;
   createdAt: string;
   updatedAt: string;
 }

@Injectable()
export class AdminApiService {

  currentUser: Admin;

  constructor(private httpThang: HttpClient) { }

  postSignup(adminInfo: Admin) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/signup`,
          adminInfo
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.adminInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

  postLogin(adminInfo: Admin) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/login`,
          adminInfo
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.adminInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }




}
