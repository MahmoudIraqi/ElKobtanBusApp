import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {InputService} from "../../../utils/input.service";

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit{
  currentLanguage: any;
  currentLang = this.translateService.currentLang ? this.translateService.currentLang : 'en';

  constructor(public translateService: TranslateService,
              private inputService: InputService) {
    translateService.addLangs(['en', 'ar']);
    translateService.setDefaultLang('en')
  }

  ngOnInit(): void {
  }

  changeLang(event: any) {
    this.currentLanguage = event;

    this.inputService.publish({type: 'currentLang', payload: this.currentLanguage})
  }
}
