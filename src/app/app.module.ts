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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment.development';
import { AuthService } from './services/auth.service';
import { KanbanBoardProjectComponent } from './kanban-components/kanban-board-project/kanban-board-project.component';
import { CommonModule } from '@angular/common';
import { KanbanSingleProjectComponent } from './kanban-components/kanban-single-project/kanban-single-project.component';
import { ModalPopupComponent } from './kanban-components/shared/modal-popup/modal-popup.component';
import { AddTaskModalComponent } from './kanban-components/shared/add-task-modal/add-task-modal.component';
import { KanbanTaskDetailsComponent } from './kanban-components/kanban-task-details/kanban-task-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    KanbanBoardProjectComponent,
    KanbanSingleProjectComponent,
    ModalPopupComponent,
    AddTaskModalComponent,
    KanbanTaskDetailsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    CoreModuleModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 3000,
      newestOnTop: true,
      progressBar: true,
      positionClass: 'toast-bottom-right',
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
