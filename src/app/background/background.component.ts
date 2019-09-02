import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-background',
    templateUrl: './background.component.html',
    styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {
    public background: string;
    public color: string;

    constructor(private mainService: MainService) { }

    public ngOnInit(): void {
        this.mainService.backImg.subscribe(result => {
            this.background = result;
        });
        this.mainService.theme.subscribe(result => {
            this.color = result['backColor'];
        });
    }

}
