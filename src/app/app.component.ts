import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NgifComponent} from "./carpeta-ng/ngif/ngif.component";
import {NgforComponent} from "./carpeta-ng/ngfor/ngfor.component";
import {NgwitchComponent} from "./carpeta-ng/ngwitch/ngwitch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgifComponent, NgforComponent, NgwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
