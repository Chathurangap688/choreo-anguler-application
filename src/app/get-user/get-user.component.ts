import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-user',
  standalone: true,
  imports: [],
  templateUrl: './get-user.component.html',
  styleUrl: './get-user.component.css'
})
export class GetUserComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute) {}
  results: any;
  userId: string | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = 'fbe085ad-7ee7-4aa8-9f05-ae42652f8a26';
      console.log(this.userId);
    });
  }



}
