import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetPokemonDialogComponent } from './get-pokemon-dialog/get-pokemon-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import localeJa from '@angular/common/locales/ja';
import { DatePipe, registerLocaleData } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';



registerLocaleData(localeJa);
FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
  declarations: [AppComponent, WelcomeComponent, GetPokemonDialogComponent, HeaderComponent, NotFoundComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    FullCalendarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  providers: [
    DatePipe,
    {
      provide: LOCALE_ID,
      useValue: 'ja-JP',
    },
    { provide: REGION, useValue: 'asia-northeast1' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
