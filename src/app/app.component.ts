import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'Create-char';

    public onCreatingPage = false;

    public onTheme = false;

    toCreatingChar() {
        this.onCreatingPage = true;
    }

    toThemeModal() {
        this.onTheme = true;
    }
}
