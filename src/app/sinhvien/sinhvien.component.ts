import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-sinhvien',
  templateUrl: './sinhvien.component.html',
  styleUrls: ['./sinhvien.component.css']
})
export class SinhvienComponent implements OnInit {
  product: any;
  id;
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
  courses = [
    { CourseID: 1050, Title: "Chemistry", Credits: 3 },
    { CourseID: 4022, Title: "Python", Credits: 3 },
    { CourseID: 4041, Title: "Macroeconomics", Credits: 3 },
    { CourseID: 1045, Title: "Calculus", Credits: 4 },
    { CourseID: 3141, Title: "DjAngo", Credits: 4 },
    { CourseID: 2021, Title: "Composition", Credits: 3 },
    { CourseID: 2042, Title: "Literature", Credits: 4 }
  ];
  enrollments = [
    { StudentID: 1, CourseID: 1050, Grade: 'A' },
    { StudentID: 1, CourseID: 4022, Grade: 'C' },
    { StudentID: 1, CourseID: 4041, Grade: 'B' },
    { StudentID: 2, CourseID: 1045, Grade: 'B' },
    { StudentID: 2, CourseID: 3141, Grade: 'F' },
    { StudentID: 2, CourseID: 2021, Grade: 'F' },
    { StudentID: 3, CourseID: 1050, Grade: 'B' },
    { StudentID: 4, CourseID: 1050, Grade: 'B' },
    { StudentID: 4, CourseID: 4022, Grade: 'F' },
    { StudentID: 5, CourseID: 4041, Grade: 'C' },
    { StudentID: 6, CourseID: 1045, Grade: 'B' },
    { StudentID: 6, CourseID: 3141, Grade: 'A' }
  ];

  constructor(private route: ActivatedRoute) {

  }
  full;
  demid;
  ngOnInit() {
    this.route.paramMap.subscribe(
      para => {
        this.id = +para.get('ID');
      });
    this.product = this.students.find(p => p.ID === this.id);
    this.full = this.product;
    this.full = this.enrollments.filter(p => p.StudentID === this.id)

    for (let i = 0; i < this.full.length; i++) 
    {
      for (let j = 0; j < this.courses.length; j++) 
      {
        if (this.full[i].CourseID === this.courses[j].CourseID)
         {
          this.full[i].Title = this.courses[j].Title
          this.full[i].Credits = this.courses[j].Credits
        }
      }
    }
  }
  
}
