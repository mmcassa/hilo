import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { LandingComponent } from './public/landing/landing.component';
import { ChessPageComponent } from './public/chess-page/chess-page.component';
import { PhpExamplesComponent } from './public/php-examples/php-examples.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: LandingComponent},
  { path: 'chess', component: ChessPageComponent},  
  { path: 'php', component: PhpExamplesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
