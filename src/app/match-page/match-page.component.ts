import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatchApiService, Match } from '../services/match-api.service';


@Component({
  selector: 'match-page',
  templateUrl: './match-page.component.html',
  styleUrls: ['./match-page.component.css']
})
export class MatchPageComponent implements OnInit {

  matchInfo = new Match();

  constructor(
    private activatedThang: ActivatedRoute,
    private matchThang: MatchApiService
  ) { }

  ngOnInit() {

    this.activatedThang.params.subscribe((myReqParams) => {
               // { path: 'phones/:id'
               //                  |
           console.log(myReqParams.id);

           this.startAjaxCall(myReqParams.id);
       });
  }

  startAjaxCall(urlId) {
    this.matchThang.getOneMatch(urlId)
    .then((matchResult: Match) => {

      this.matchInfo = matchResult;
    })
    .catch((err) =>{
            alert("Sorry! Something went wrong.");
            console.log("Phone Details Error");
            console.log(err);
        });
  }

}
