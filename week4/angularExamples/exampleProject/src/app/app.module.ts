import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BindingExplainedComponent } from './binding-explained/binding-explained.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyComponentComponent,
    ItemListComponent,
    BindingExplainedComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
