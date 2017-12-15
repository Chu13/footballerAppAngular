import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminApiService } from './services/admin-api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
