import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      you selected department with ID {{departmentId}}
    </h3>

    <div>
      <button (click)='showOverview()'> overview</button>
      <button (click)='showContact()' style="margin: 5px;">contact</button>
    </div>

    <router-outlet></router-outlet>

    <button (click)='goPrevious()'>Previous</button>
    <button style="margin: 5px;" (click)='goNext()'>Next</button>
    <div>
      <button (click)='goToDepartment()'>Back</button>
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id')!);
    // this.departmentId= id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id')!);
      this.departmentId = id;
    });
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department', previousId])
  }

  goNext() {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/department', nextId])
  }

  goToDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/department', {id: selectedId, test: 'testValue'}]);
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route})
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route})
  }






}
