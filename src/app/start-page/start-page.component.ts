import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
    @Output() letsStart: EventEmitter<any> = new EventEmitter();

    constructor() { }

    public onLetsStart(): void {
        this.letsStart.emit();
    }
}
