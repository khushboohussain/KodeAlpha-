import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirestoreSettingsToken} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/landing/home/home.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { environment } from 'src/environments/environment';
import { GraphicsComponent } from './pages/portfolio/graphics/graphics.component';
import { WebComponent } from './pages/portfolio/web/web.component';
import { PortfolioComponent } from './pages/portfolio/portfolio/portfolio.component';
import { AboutusComponent } from './pages/portfolio/aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    GraphicsComponent,
    PortfolioComponent,
    WebComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'portfolio/graphics', component: GraphicsComponent},
      {path: 'portfolio/webdevelopment', component: WebComponent},
      {path: 'about-kodealpha', component: AboutusComponent}

    ])
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
