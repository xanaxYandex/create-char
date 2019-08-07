import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export class MainService {

    public content: BehaviorSubject<object> = new BehaviorSubject({});
    public backImg: BehaviorSubject<string> = new BehaviorSubject('../../assets/Race0.png');
    public backColor: BehaviorSubject<string> = new BehaviorSubject('black');

    constructor() {
        this.toRace();
    }

    toRace() {
        this.content.next({
            selectionTitle: 'Race',
            paragraphs: ['Human', 'Elf', 'Dwarf'],
            messages: ['The first:', 'Everyone is crazy about it now...'],
            notifications: ['Seriously Human? You are human in real life...', 'Elf? Are you gay ?', 'Good choice.']
        });
    }

    toClass() {
        this.content.next({
            selectionTitle: 'Class',
            paragraphs: ['Warrior', 'Hunter', 'Mage'],
            messages: ['The second:', 'Second but not least'],
            notifications: ['"Original"', 'Classic', 'LOL really?']
        });
    }

    toThemeSelection() {
        this.content.next({
            selectionTitle: 'Theme',
            paragraphs: ['Day', 'Night'],
            messages: ['Okay, glad we both chose a warrior dwarf :3', 'Left a little just choose settings'],
        });
    }
}
