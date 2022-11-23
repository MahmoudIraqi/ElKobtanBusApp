import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {InputService} from "../../../utils/input.service";
import {TranslateService} from "@ngx-translate/core";
import {distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  @Output() selectedLanguage = new EventEmitter();
  currentLang = this.translateService.currentLang ? this.translateService.currentLang : 'en';

  constructor(public translateService: TranslateService,
              private inputService: InputService) {
    translateService.addLangs(['en', 'ar']);
    translateService.setDefaultLang('en')
  }

  ngOnInit(): void {
    this.inputService.getInput$().pipe(
      filter(x => x.type === 'currentLang'),
      distinctUntilChanged()
    ).subscribe(res => {
      this.currentLang = res.payload;
    });
  }


  translateSite(event: any) {
    this.translateService.use(event.target.value);

    this.selectedLanguage.emit(event.target.value);
  }

  navigateForLogin() {
  }
}
