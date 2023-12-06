import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WishComponent } from './wish/wish.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const appRoutes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "wishlist", component: WishlistComponent },
  {path: "wish", component: WishComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WishComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
