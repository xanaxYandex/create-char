import { MainService } from './../main.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-end-page',
    templateUrl: './end-page.component.html',
    styleUrls: ['./end-page.component.scss']
})
export class EndPageComponent {
    @Output() goAgain: EventEmitter<any> = new EventEmitter();

    constructor(private mainService: MainService) { }

    public again(): void {
        this.goAgain.emit();
    }

}
