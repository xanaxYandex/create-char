import { MainService } from './main.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectionModalComponent } from './selection-modal/selection-modal.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { BackgroundComponent } from './background/background.component';
import { StartPageComponent } from './start-page/start-page.component';
import { EndPageComponent } from './end-page/end-page.component';
import { ThemeModalComponent } from './theme-modal/theme-modal.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ColorsDirective } from './colors.directive';

@NgModule({
    declarations: [
        AppComponent,
        SelectionModalComponent,
        MessageModalComponent,
        BackgroundComponent,
        StartPageComponent,
        EndPageComponent,
        ThemeModalComponent,
        ColorsDirective
    ],
    imports: [
        BrowserModule,
        ColorPickerModule
    ],
    providers: [MainService],
    bootstrap: [AppComponent]
})
export class AppModule { }
