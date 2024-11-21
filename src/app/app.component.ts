import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  title = 'choreo-anguler-application';
  results: any;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getApiResponse();
  }
  getApiResponse() {
    this.http.get('https://94e5cdf8-348a-4b96-8029-d31bf5e62a82.e1-us-east-azure.choreoapps.dev/hello?name=chathuranga1').subscribe((response) => {
      this.results = response
    })
  }
}
