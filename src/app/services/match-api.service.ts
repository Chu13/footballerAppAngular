import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Match {
   captain: string;
   date: string;
   length: string;
   time: string;
   field: string;
   players: string[];

   // these are assigned by the database
   _id: string;
   createdAt: string;
   updatedAt: string;
 }

@Injectable()
export class MatchApiService {

  constructor(private httpThang: HttpClient) { }

    getMatches() {
       return this.httpThang.get(
         `${environment.backendUrl}/api/matches`
       ).toPromise();
   }

     getOneMatch(oneId: string) {
       return this.httpThang.get(
         `${environment.backendUrl}/api/matches/${oneId}`
       ).toPromise();
   }

}
