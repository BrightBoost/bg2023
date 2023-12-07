import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ItemListComponent } from './item-list/item-list.component';
import { BindingExplainedComponent } from './binding-explained/binding-explained.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EventChangeSelectComponent } from './event-change-select/event-change-select.component';
import { LoginComponent } from './login/login.component';
import { LameGameComponent } from './lame-game/lame-game.component';
import { ScoreBarComponent } from './score-bar/score-bar.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { PopulateSelectComponent } from './populate-select/populate-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MyComponentComponent,
    ItemListComponent,
    BindingExplainedComponent,
    TwoWayBindingComponent,
    EventChangeSelectComponent,
    LoginComponent,
    LameGameComponent,
    ScoreBarComponent,
    ColorPickerComponent,
    PopulateSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
