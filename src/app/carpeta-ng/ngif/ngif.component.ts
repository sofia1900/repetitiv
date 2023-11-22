import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {

  show = true;
  a = true;
  b = false;
  showActions = true;

  user = { id: 1, name: "Ramesh" };

  users = [
    { id: 100, firstName: "Ramesh", lastName: "Fadatare", emailId: "ramesh@gmail.com" },
    { id: 101, firstName: "Tony", lastName: "Stark", emailId: "tony@gmail.com" },
    { id: 100, firstName: "Tom", lastName: "Cruise", emailId: "tom@gmail.com" }
  ];

}
