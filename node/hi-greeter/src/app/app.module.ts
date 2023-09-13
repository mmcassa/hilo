import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatCommonModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidenavOptionComponent } from './nav/sidenav-option/sidenav-option.component';
import { SidenavListComponent } from './nav/sidenav-list/sidenav-list.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { LandingComponent } from './public/landing/landing.component';
import { HomeComponent } from './private/home/home.component';
import { ProfileComponent } from './private/profile/profile.component';
import { AboutmeComponent } from './public/aboutme/aboutme.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavBarComponent } from './nav/sidenav-bar/sidenav-bar.component';
import { SidenavMiniBtnComponent } from './nav/sidenav-mini-btn/sidenav-mini-btn.component';
import { HiloInputDirective } from './shared/directives/hilo-input.directive';
@NgModule({
  declarations: [
    AppComponent,
    SidenavOptionComponent,
    SidenavListComponent,
    LoginPageComponent,
    LandingComponent,
    HomeComponent,
    ProfileComponent,
    AboutmeComponent,
    SidenavBarComponent,
    SidenavMiniBtnComponent,
    HiloInputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatCommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSidenavModule,
    MatSelectModule,
    MatProgressBarModule,
    MatChipsModule,
    MatExpansionModule,
    MatDialogModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatCardModule,
    MatBadgeModule,
    MatDatepickerModule,
    MatBottomSheetModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
