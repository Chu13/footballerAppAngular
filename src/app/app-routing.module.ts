import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';


import { AdminPageComponent } from './admin-page/admin-page.component';
// import { NotFoundComponent } from './not-found/not-found.component';
import { MatchListComponent } from './admin-page/match-list/match-list.component';
import { MatchPageComponent } from './match-page/match-page.component';

const routes: Routes = [
  { path: '',           component: AdminPageComponent },
  // { path: 'matches',     component: MatchListComponent },
  { path: 'match/:id', component: MatchPageComponent },
  // { path: '**',         component: NotFoundComponent}
];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
