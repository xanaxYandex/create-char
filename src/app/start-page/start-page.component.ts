import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

    public flag = '#93C2ED';
    public transition = '0s';

    constructor() { }

    ngOnInit() {
    }

    onBodyClick() {
        this.flag = 'rgb(46, 100, 172)';
        setTimeout(() => {
            this.transition = '0.5s';
        }, 0);
        setTimeout(() => {
            this.flag = '#93C2ED';
        }, 100);
        setTimeout(() => {
            this.transition = '0s';
        }, 200);

    }

}
