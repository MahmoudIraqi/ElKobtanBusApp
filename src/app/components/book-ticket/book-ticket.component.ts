import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TranslateService} from "@ngx-translate/core";
import {InputService} from "../../../utils/input.service";
import {HttpClient} from "@angular/common/http";
import {distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.scss']
})
export class BookTicketComponent implements OnInit, AfterViewInit {
  bookTicketForm!: FormGroup;
  allSelectOptions: any = {
    times: [
      {
        en: '10 am',
        ar: '10 ص'
      },
      {
        en: '12 pm',
        ar: '12 ظ'
      },
      {
        en: '06 pm',
        ar: '6 م'
      },
      {
        en: '10 pm',
        ar: '10 م'
      },
      {
        en: '03 am',
        ar: '3 ص'
      },
    ],
    allBusPoints: [
      {
        en: 'Damanhour',
        ar: 'دمنهور'
      },
      {
        en: 'Kafr El-Sheikh',
        ar: 'كفر الشيخ'
      },
      {
        en: 'Kafr El-Zayat',
        ar: 'كفر الزيات'
      },
      {
        en: 'Tanta',
        ar: 'طنطا'
      },
      {
        en: 'Berket El-Sabaa',
        ar: 'بركة السبع'
      },
      {
        en: 'Quesna',
        ar: 'قويسنا'
      },
      {
        en: 'Banha',
        ar: 'بنها'
      },
      {
        en: 'Cairo',
        ar: 'القاهرة'
      },
      {
        en: 'El-NafaQ',
        ar: 'النفق'
      },
      {
        en: 'Ras Sedr',
        ar: 'راس سدر'
      },
      {
        en: 'Abu Zenima',
        ar: 'أبو زنيمة'
      },
      {
        en: 'Abu Redis',
        ar: 'أبو رديس'
      },
      {
        en: 'Tor Sinai',
        ar: 'طور سيناء'
      },
      {
        en: 'Sharm El-Shaikh',
        ar: 'شرم الشيخ'
      },
      {
        en: 'Dahab',
        ar: 'دهب'
      }
    ],
    returnBusPoints: [
      {
        en: 'El-NafaQ',
        ar: 'النفق'
      },
      {
        en: 'Ras Sedr',
        ar: 'راس سدر'
      },
      {
        en: 'Abu Zenima',
        ar: 'أبو زنيمة'
      },
      {
        en: 'Abu Redis',
        ar: 'أبو رديس'
      },
      {
        en: 'Tor Sinai',
        ar: 'طور سيناء'
      },
      {
        en: 'Sharm El-Shaikh',
        ar: 'شرم الشيخ'
      },
      {
        en: 'Dahab',
        ar: 'دهب'
      }
    ],
    departureBusPoints: [
      {
        en: 'Damanhour',
        ar: 'دمنهور'
      },
      {
        en: 'Kafr El-Sheikh',
        ar: 'كفر الشيخ'
      },
      {
        en: 'Kafr El-Zayat',
        ar: 'كفر الزيات'
      },
      {
        en: 'Tanta',
        ar: 'طنطا'
      },
      {
        en: 'Berket El-Sabaa',
        ar: 'بركة السبع'
      },
      {
        en: 'Quesna',
        ar: 'قويسنا'
      },
      {
        en: 'Banha',
        ar: 'بنها'
      },
      {
        en: 'Cairo',
        ar: 'القاهرة'
      }
    ],
  };
  @Output() closeModal = new EventEmitter();
  activatedTab: any;
  currentLang = this.translateService.currentLang ? this.translateService.currentLang : 'en';

  constructor(public translateService: TranslateService,
              private inputService: InputService,
              private http: HttpClient,
              private fb: FormBuilder) {
    this.getFormAsStarting();
  }

  ngOnInit(): void {
    this.inputService.getInput$().pipe(
      filter(x => x.type === 'currentLang'),
      distinctUntilChanged()
    ).subscribe(res => {
      this.currentLang = res.payload;
    });
  }

  ngAfterViewInit(): void {
    this.activatedTab = document.getElementById('pillsTab')?.children[0].children[0].className.includes('active');
    this.getFormAsStarting();
  }

  getFormAsStarting() {
    this.bookTicketForm = this.fb.group({
      oneWay: this.fb.group({
        busType: this.fb.control(''),
        customerName: this.fb.control('', this.activatedTab ? Validators.required : Validators.nullValidator),
        customerPhoneNumber: this.fb.control('', this.activatedTab ? Validators.required : Validators.nullValidator),
        time: this.fb.control('', this.activatedTab ? Validators.required : Validators.nullValidator),
        date: this.fb.control('', this.activatedTab ? Validators.required : Validators.nullValidator),
        ridingPoint: this.fb.control('', this.activatedTab ? Validators.required : Validators.nullValidator),
        arrivingPoint: this.fb.control('', this.activatedTab ? Validators.required : Validators.nullValidator),
        passenger: this.fb.control(0, this.activatedTab ? Validators.required : Validators.nullValidator),
      }),
      roundWay: this.fb.group({
        busType: this.fb.control(''),
        customerName: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        customerPhoneNumber: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        time: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        returnTime: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        date: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        returnDate: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        ridingPoint: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        arrivingPoint: this.fb.control('', !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
        passenger: this.fb.control(0, !this.activatedTab && this.activatedTab !== undefined ? Validators.required : Validators.nullValidator),
      })
    });
  }

  onSubmit() {
    console.log('bookTicketForm', this.bookTicketForm);

    if (this.activatedTab) {
      this.http.post('./oneWayMail.php', this.bookTicketForm.value.oneWay).subscribe((res: any) => {
      });
    } else if (!this.activatedTab && this.activatedTab !== undefined) {
      this.http.post('./returningTripMail.php', this.bookTicketForm.value.roundWay).subscribe((res: any) => {
      });
    }
  }

  setTabSelected(event: any) {
    this.activatedTab = document.getElementById('pillsTab')?.children[0].children[0].className.includes('active');
    this.getFormAsStarting();
  }

  selectedLabel(name: string) {
    if (this.activatedTab) {
      this.bookTicketForm.patchValue({
        oneWay: {
          busType: name
        }
      })
    } else if (!this.activatedTab && this.activatedTab !== undefined) {
      this.bookTicketForm.patchValue({
        roundWay: {
          busType: name
        }
      })
    }

    console.log('bookTicketForm', this.bookTicketForm.value)
  }

}
