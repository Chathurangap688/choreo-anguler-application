import { Routes } from '@angular/router';
import { GetUserComponent } from './get-user/get-user.component';
import { AppComponent } from './app.component';
import { UnityIframeComponent } from './unity-iframe/unity-iframe.component';

export const routes: Routes = [
    { path: 'getUser/:userId', component: GetUserComponent},
    { path: 'iframe', component: UnityIframeComponent},
    {path: 'home', component: AppComponent}
];
