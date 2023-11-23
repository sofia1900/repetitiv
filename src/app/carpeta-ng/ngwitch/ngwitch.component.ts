import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngwitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngwitch.component.html',
  styleUrl: './ngwitch.component.css'
})
export class NgwitchComponent implements OnInit {

  constructor() { }
  ngOnInit() {}

  user = this.randomUser();
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  day = this.randomDays();

  randomDays(): string {
    const id = Math.floor(Math.random() * 7);
    return Days[id];
  }
  randomUser(): string {
    const id = Math.floor(Math.random() * 3);
    return Users[id];
  }

}

export enum Users {Ramesh,Tom,Tony}
export enum Days {SUNDAY,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY}
