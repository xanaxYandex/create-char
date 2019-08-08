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

    public onEndPage = false;

    toCreatingChar() {
        this.onCreatingPage = true;
    }

    toThemeModal() {
        this.onTheme = true;
    }

    toEndPage() {
        console.log('hui');
        this.onCreatingPage = false;
        this.onTheme = false;
        this.onEndPage = true;
    }

    goAgain() {
        this.onEndPage = false;
        this.onCreatingPage = false;
    }
}
