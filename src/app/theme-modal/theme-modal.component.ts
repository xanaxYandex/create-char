import { ColorPickerModule } from 'ngx-color-picker';
import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-theme-modal',
    templateUrl: './theme-modal.component.html',
    styleUrls: ['./theme-modal.component.scss']
})
export class ThemeModalComponent implements OnInit {

    public back = 'white';

    public colorPick = '';

    public messageVision = true;

    public backBut = false;

    public flag = true;

    public id = 0;

    public color = '';

    public transition = '';

    public circles = [true, false, false];

    public selectionTitle = '';

    public paragraph = [];

    constructor(private mainService: MainService) { }

    ngOnInit() {
        this.mainService.content.subscribe(result => {
            this.selectionTitle = result['selectionTitle'];
            this.paragraph = result['paragraphs'];
        });
    }

    selectOption(optionId: number, day: boolean) {
        this.flag = false;
        setTimeout(() => {
            this.flag = true;
        }, 100);
        if (this.selectionTitle === 'Theme') {
            if (day) {

            } else {

            }
            this.circles.map((elem, i, arr) => {
                if (i === optionId) {
                    this.id = optionId;
                    return arr[i] = true;

                } else {
                    return arr[i] = false;
                }
            });
        }

    }

    onBodyClick() {
        this.color = 'rgb(46, 100, 172)';
        setTimeout(() => {
            this.transition = '0.5s';
        }, 0);
        setTimeout(() => {
            this.color = '';
        }, 100);
        setTimeout(() => {
            this.transition = '0s';
        }, 200);

    }

    hideMessage() {
        this.messageVision = false;
    }

}

