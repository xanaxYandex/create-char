import { Directive, HostBinding, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appColors]'
})
export class ColorsDirective implements OnInit {
    @Input() backColor: string;
    @Input() fontColor: string;

    constructor(private element: ElementRef) { }

    public ngOnInit(): void {
        this.element.nativeElement.style.backgroundColor = this.backColor;
        this.element.nativeElement.style.color = this.fontColor;
    }
}
