import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngwitch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngwitch.component.html',
  styleUrl: './ngwitch.component.css'
})
export class NgwitchComponent {

  user = { id: 1, name: "Ramesh" };

  users = [
    { id: 100, firstName: "Ramesh", lastName: "Fadatare", emailId: "ramesh@gmail.com" },
    { id: 101, firstName: "Tony", lastName: "Stark", emailId: "tony@gmail.com" },
    { id: 102, firstName: "Tom", lastName: "Cruise", emailId: "tom@gmail.com" }
  ];

}
