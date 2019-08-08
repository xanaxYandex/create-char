import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

    public flag = '#93C2ED';
    public transition = '0s';

    @Output() letsStart: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onLetsStart() {
        this.letsStart.emit();
    }

}
