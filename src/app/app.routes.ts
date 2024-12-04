import { Routes } from '@angular/router';
import { GetUserComponent } from './get-user/get-user.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'getUser/:userId', component: GetUserComponent},
    {path: '', component: AppComponent}
];
