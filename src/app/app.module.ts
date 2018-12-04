import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {AppRoutingModule} from './app.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoComponent } from './logo/logo.component';
import { NavbarOptionsComponent } from './navbar-options/navbar-options.component';
import { SearchItemComponent } from './search-item/search-item.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { NguCarouselModule } from '@ngu/carousel';            
import {CarouselModule} from 'primeng/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';
import { SignUpModalComponent } from './sign-up-modal/sign-up-modal.component';
import { EqualValidator } from './helpers/equal-validator.directive'; 
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LogoComponent,
    NavbarOptionsComponent,
    SearchItemComponent,
    CarouselComponent,
    FooterComponent,
    ItemsContainerComponent,
    SignInModalComponent,
    SignUpModalComponent,
    EqualValidator
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NguCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [SignInModalComponent, SignUpModalComponent]
})
export class AppModule { }
