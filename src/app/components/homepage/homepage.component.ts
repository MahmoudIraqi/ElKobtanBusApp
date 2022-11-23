import {Component, OnInit} from '@angular/core';
import {CarouselData} from "../../../utils/models";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  sliderData: CarouselData[] = [
    {
      imgPath: "assets/img/slider1.jpeg",
      imgTitle: {
        en: 'First slide label',
        ar: ''
      },
      imgParagraph: {
        en: 'First slide Paragraph',
        ar: ''
      }
    },
    {
      imgPath: "assets/img/slider1.jpeg",
      imgTitle: {
        en: 'second slide label',
        ar: ''
      },
      imgParagraph: {
        en: 'second slide Paragraph',
        ar: ''
      }
    },
    {
      imgPath: "assets/img/slider1.jpeg",
      imgTitle: {
        en: 'third slide label',
        ar: ''
      },
      imgParagraph: {
        en: 'third slide Paragraph',
        ar: ''
      }
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }
}
