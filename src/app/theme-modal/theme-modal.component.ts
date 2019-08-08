import { ColorPickerModule } from 'ngx-color-picker';
import { MainService } from './../main.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-theme-modal',
    templateUrl: './theme-modal.component.html',
    styleUrls: ['./theme-modal.component.scss']
})
export class ThemeModalComponent implements OnInit {

    @Output() toEndPage: EventEmitter<any> = new EventEmitter();

    public fontColor = '';

    public colorPick = '#FFF9F9';

    public messageVision = true;

    public backBut = false;

    public flag = true;

    public id = 0;

    public circles = [true, false, false];

    public selectionTitle = '';

    public paragraph = [];

    constructor(private mainService: MainService) { }

    ngOnInit() {
        this.mainService.content.subscribe(result => {
            this.selectionTitle = result['selectionTitle'];
            this.paragraph = result['paragraphs'];
        });
        this.mainService.theme.subscribe(result => {
            this.fontColor = result['fontColor'];
            this.colorPick = result['modalsColor'];
        });
    }

    selectOption(optionId: number, day: boolean) {
        this.flag = false;
        setTimeout(() => {
            this.flag = true;
        }, 100);
        if (this.selectionTitle === 'Theme') {
            if (day) {
                this.mainService.theme.next({
                    backColor: 'white',
                    fontColor: '#716868',
                    modalsColor: '#FFF9F9'
                });
            } else {
                this.mainService.theme.next({
                    backColor: '#343425',
                    fontColor: 'white',
                    modalsColor: '#0C0C08'
                });
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

    hideMessage() {
        this.messageVision = false;
    }

    saveSettings() {
        this.toEndPage.emit();
        this.mainService.saveSettings(this.colorPick);
        this.mainService.toRace();
    }

}

