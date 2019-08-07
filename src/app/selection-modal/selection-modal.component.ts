import { MainService } from './../main.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-selection-modal',
    templateUrl: './selection-modal.component.html',
    styleUrls: ['./selection-modal.component.scss']
})
export class SelectionModalComponent implements OnInit {

    @Output() toThemeModal: EventEmitter<any> = new EventEmitter();

    public notClosed = false;

    public isNotified = false;

    public notification = [];

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
            this.notification = result['notifications'];
        });
    }

    selectOption(optionId: number) {
        this.isNotified = false;
        this.flag = false;
        setTimeout(() => {
            this.flag = true;
        }, 100);
        if (this.selectionTitle === 'Race') {
            this.circles.map((elem, i, arr) => {
                if (i === optionId) {
                    this.mainService.backImg.next(`../../assets/${this.selectionTitle}${optionId}.png`);
                    this.id = optionId;
                    return arr[i] = true;

                } else {
                    return arr[i] = false;
                }
            });
        } else if (this.selectionTitle === 'Class') {
            this.circles.map((elem, i, arr) => {
                if (i === optionId) {
                    this.mainService.backImg.next(`../../assets/${this.selectionTitle}${this.paragraph[optionId]}${this.id}.png`);
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

    nextButton() {
        if (!this.isNotified) {
            this.messageVision = false;
            this.isNotified = true;
            this.notClosed = true;
        } else {
            if (this.selectionTitle === 'Race') {
                this.mainService.toClass();
                this.mainService.backImg.next(`../../assets/${this.selectionTitle}${this.paragraph[0]}${this.id}.png`);
                this.circles = [true, false, false];
                this.backBut = true;
                this.messageVision = true;
                this.isNotified = false;
            } else if (this.selectionTitle === 'Class') {
                this.mainService.toThemeSelection();
                this.toThemeModal.emit();
            }
        }


    }

    backButton() {
        if (this.selectionTitle === 'Class') {
            this.mainService.toRace();
            this.mainService.backImg.next(`../../assets/${this.selectionTitle}${0}.png`);
            this.circles = [true, false, false];
            this.backBut = false;
            this.messageVision = true;
        }
    }

    hideMessage() {
        this.messageVision = false;
    }

}
