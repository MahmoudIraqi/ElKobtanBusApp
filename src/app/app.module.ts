import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { HomeContainerComponent } from './components/home-container/home-container.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CarouselComponent } from './components/common/carousel/carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { BookTicketComponent } from './components/book-ticket/book-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeContainerComponent,
    HomepageComponent,
    CarouselComponent,
    HeaderComponent,
    BookTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
