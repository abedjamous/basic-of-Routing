import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)='onSelect(department)' *ngFor='let department of departments'>
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class DepartmentListComponent implements OnInit {
  departments = [
    {"id": 1, "name": "Angulat"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "React"},
    {"id": 5, "name": "Bootstrap"},
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department: any) {
    this.router.navigate(['/department', department.id])
  }

}
