import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TodaypageComponent } from './todaypage/todaypage.component';
import { BookmarkpageComponent } from './bookmarkpage/bookmarkpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("565608643997908")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("477958216757-eerk5vgctumtf4odu3sfn3v6megto8va.apps.googleusercontent.com")
        }
      ]);
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    TodaypageComponent,
    BookmarkpageComponent,
    DashboardComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DlDateTimePickerModule,
    SocialLoginModule
    
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
