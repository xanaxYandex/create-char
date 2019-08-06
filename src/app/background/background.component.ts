import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

    public backGround: string;

    constructor() { }

    ngOnInit() {
        this.backGround = '../../assets/1563214703920.png';
    }

}
