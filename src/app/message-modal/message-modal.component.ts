import { MainService } from './../main.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-message-modal',
    templateUrl: './message-modal.component.html',
    styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

    public title = '';

    public text = ['', ''];

    public colorPick = '';

    public fontColor = '';

    @Output() hide: EventEmitter<any> = new EventEmitter();

    constructor(private mainService: MainService) { }

    ngOnInit() {
        this.mainService.content.subscribe(result => {
            this.title = result['selectionTitle'];
            this.text = result['messages'];
        });

        this.mainService.theme.subscribe(result => {
            this.fontColor = result['fontColor'];
            this.colorPick = result['modalsColor'];
        });
    }

    hideMessage() {
        this.hide.emit();
    }

}
