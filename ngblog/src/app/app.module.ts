import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { environment } from '../environments/environment';
import { SHARED_SERVICES } from './shared/services';
//import { SearchFormModule } from './shared/components';
import { AppComponent } from './app.component';
import { routes } from './app.routing';
import { API_BASE_URL } from './app.tokens';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes, {useHash: environment.production}),

    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    AmplifyAngularModule

    //SearchFormModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ...SHARED_SERVICES,
    //{ provide: API_BASE_URL, useValue: environment.apiBaseUrl },
    //{ provide: WS_URL, useValue: environment.wsUrl }
    AmplifyService
  ]
})
export class AppModule {}
