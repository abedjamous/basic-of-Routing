import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      you selected department with ID {{departmentId}}
    </h3>
    <a (click)='goPrevious()'>Previous</a>
    <a (click)='goNext()'>Next</a>
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




}