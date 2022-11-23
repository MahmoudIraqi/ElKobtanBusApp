import {Component, Input, OnInit} from '@angular/core';
import {CarouselData} from "../../../../utils/models";
import {TranslateService} from "@ngx-translate/core";
import {InputService} from "../../../../utils/input.service";
import {distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{
  @Input() carouselList: CarouselData[] = [];
  currentLang = this.translateService.currentLang ? this.translateService.currentLang : 'en';

  constructor(public translateService: TranslateService, private inputService: InputService) {
  }

  ngOnInit(): void {
    this.inputService.getInput$().pipe(
      filter(x => x.type === 'currentLang'),
      distinctUntilChanged()
    ).subscribe(res => {
      this.currentLang = res.payload;
    });
  }
}
