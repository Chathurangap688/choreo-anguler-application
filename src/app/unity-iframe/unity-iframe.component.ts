import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-unity-iframe',
  standalone: true,
  imports: [],
  templateUrl: './unity-iframe.component.html',
  styleUrl: './unity-iframe.component.css'
})
export class UnityIframeComponent {
  name = 'Angular Iframe Src';
  url: string =
    'https://unity.dev.login.hardrock.com/oauth2/authorize?response_type=code&cancel_url=https%3A%2F%2Fwww.google.com%2F&client_id=BCyfRUEqvw5aMUs2RCKLNS0EoZQa&scope=openid&redirect_uri=https://localhost/callback&r=4-0-0';
  urlSafe!: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}