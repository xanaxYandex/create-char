import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionModalComponent } from './selection-modal/selection-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { BackgroundComponent } from './background/background.component';
import { StartPageComponent } from './start-page/start-page.component';
import { EndPageComponent } from './end-page/end-page.component';
import { DecorationModalComponent } from './decoration-modal/decoration-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionModalComponent,
    MessageModalComponent,
    BackgroundComponent,
    StartPageComponent,
    EndPageComponent,
    DecorationModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
