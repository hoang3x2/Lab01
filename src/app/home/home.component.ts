import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students = [
    { ID: 1, FirstMidName: "Carson", LastName: "Alexander", EnrollmentDate: "2005-09-01" },
    { ID: 2, FirstMidName: "Meredith", LastName: "Alonso", EnrollmentDate: "2002-09-01" },
    { ID: 3, FirstMidName: "Arturo", LastName: "Anand", EnrollmentDate: "2003-09-01" },
    { ID: 4, FirstMidName: "Gytis", LastName: "Barzdukas", EnrollmentDate: "2002-09-01" },
    { ID: 5, FirstMidName: "Yan", LastName: "Li", EnrollmentDate: "2002-09-01" },
    { ID: 6, FirstMidName: "Peggy", LastName: "Justice", EnrollmentDate: "2001-09-01" },
    { ID: 7, FirstMidName: "Laura", LastName: "Norman", EnrollmentDate: "2003-09-01" },
    { ID: 8, FirstMidName: "Nino", LastName: "Olivetto", EnrollmentDate: "2005-09-01" }
  ];

  constructor() { }

  ngOnInit() {
  }
  delete(test) {
    var a = confirm('Bạn có chắc muốn xóa')
    if (a == true) {
      for (let i = 0; i < this.students.length; i++)
        if (this.students[i].ID == test) {
          this.students.splice(i, 1)
        }
    }
  }

}
