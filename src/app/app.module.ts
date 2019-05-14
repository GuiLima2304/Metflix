import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { MovieComponent } from './pages/movie/movie.component';
import { LogoComponent } from './components/logo/logo.component';
import { HttpClientModule } from '@angular/common/http';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CatalogComponent,
    MovieComponent,
    LogoComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
