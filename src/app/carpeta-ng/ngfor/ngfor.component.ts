import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngfor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngfor.component.html',
  styleUrl: './ngfor.component.css'
})
export class NgforComponent {

  users = [
    { id: 100, firstName: "Ramesh", lastName: "Fadatare", emailId: "ramesh@gmail.com" },
    { id: 101, firstName: "Tony", lastName: "Stark", emailId: "tony@gmail.com" },
    { id: 102, firstName: "Tom", lastName: "Cruise", emailId: "tom@gmail.com" }
  ];

}
