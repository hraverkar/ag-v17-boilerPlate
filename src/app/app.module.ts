import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './modules/material/material.module';
import { CoreModuleModule } from './core/core-module/core-module.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutComponent } from './component/about/about.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, AboutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CoreModuleModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ToastrModule.forRoot({ closeButton: true, timeOut: 3000, newestOnTop: true, progressBar: true, positionClass: 'toast-bottom-left'})
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
