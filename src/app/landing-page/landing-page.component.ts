import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { LanguageService } from 'src/service/LanguageService';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private router: Router,
    private languageService: LanguageService
  ) {}
  ngOnInit(): void {
    const currentLanguage: string = this.languageService.getCurrentLanguage();
    console.log('currentLanguage' + currentLanguage);
    this.translate.use(currentLanguage);
  }
  switchLanguage(language: string) {
    this.languageService.setCurrentLanguage(language);
  }

  logout() {
    this.router.navigate(['/login']);
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
}
