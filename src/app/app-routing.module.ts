import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminLoginComponent } from './admin-page/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-page/admin-signup/admin-signup.component';
import { CreateMatchComponent } from './admin-page/create-match/create-match.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MatchListComponent } from './admin-page/match-list/match-list.component';
import { MatchPageComponent } from './match-page/match-page.component';
import { PlayerLoginComponent } from './match-page/player-login/player-login.component';
import { PlayerSignupComponent } from './match-page/player-signup/player-signup.component';

const routes: Routes = [
  { path: '',           component: AdminPageComponent },
  { path: 'matches/:id', component: MatchPageComponent },
  { path: '**',         component: NotFoundComponent}
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
