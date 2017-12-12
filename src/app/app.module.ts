import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MatchPageComponent } from './match-page/match-page.component';
import { PlayerSignupComponent } from './match-page/player-signup/player-signup.component';
import { PlayerLoginComponent } from './match-page/player-login/player-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminLoginComponent } from './admin-page/admin-login/admin-login.component';
import { AdminSignupComponent } from './admin-page/admin-signup/admin-signup.component';
import { CreateMatchComponent } from './admin-page/create-match/create-match.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchPageComponent,
    PlayerSignupComponent,
    PlayerLoginComponent,
    AdminPageComponent,
    AdminLoginComponent,
    AdminSignupComponent,
    CreateMatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
