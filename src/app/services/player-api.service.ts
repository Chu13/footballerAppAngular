import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Player {
   // sign up form
   fullName: string;
   phone: string;
   username: string;
   nationality: string;
   position: string;

   // sign up & log in forms
   email: string;
   password: string;

   // assigned by the database
   _id: string;
   createdAt: string;
   updatedAt: string;
 }

@Injectable()
export class PlayerApiService {

  currentUser: Player;

  constructor(private httpThang: HttpClient) { }

  postPlayerSignup(playerInfo: Player) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/signup/player`,
          playerInfo
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.playerInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

  postPlayerLogin(playerInfo: Player) {
      return this.httpThang.post(
          `${environment.backendUrl}/api/login/player`,
          playerInfo
        )
        .toPromise()
        .then((apiResult: any) => {
            // update "currentUser" since we are logged in
            this.currentUser = apiResult.playerInfo;
            // return "apiResult" for the component
            return apiResult;
        });
  }

}
