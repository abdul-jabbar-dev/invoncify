import {
  AfterContentChecked,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';
enum Alignment {
  Center = 'center',
  Bottom = 'flex-end',
  Top = 'flex-start',
}

enum Language {
  English = 'english',
  Hindi = 'hindi',
  Chinese = 'chinese',
}

@Component({
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css'],
})
export class PreviewerComponent{
  // start temp
  currency = {
    id: 'f14f88d1-9077-42bd-8519-135956204f33',
    country: 'United States',
    currencyName: 'US Dollar',
    currencySymbol: '$',
    currencyNameShort: 'USD',
    symbolPlacement: 'before',
  };
  //end temp



  id: string | null = null;
  date = Date.now();
  @Input() imgWidth: number = 50;
  @Input() template: string = 'Business';
  @Input() fontSize: number = 12;
  @Input() color: string = '#697689';
  @Input() dateFormat: string = 'MM/dd/yyyy';
  @Input() language: Language = Language.English;
  @Input() alignment: Alignment = Alignment.Top;
  @Input() accessibility: {
    label: string;
    value: string;
    checked?: boolean;
  }[] = [
    { label: 'Logo', value: 'Logo', checked: true },
    { label: 'Symbol', value: 'Symbol', checked: true },
    { label: 'Recipent', value: 'Recipent', checked: true },
    { label: 'Accent Color', value: 'Accent Color', checked: true },
  ];

  constructor(private route: ActivatedRoute) {}


  getCurrency(arg0: string) {
    const isSymble = !!this.accessibility.find((pro) => pro.label === 'Symbol')
      ?.checked;

    let symble = this.currency.currencyNameShort;

    if (isSymble) {
      symble = this.currency.currencySymbol;
    } else {
      symble = this.currency.currencyNameShort;
    }
    const formattedCurrency =
      this.currency.symbolPlacement === 'before'
        ? `${symble}\u00A0${arg0}`
        : `${arg0}\u00A0${symble}`;

    return formattedCurrency;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }
  hasAccessibility(label: string) {
    return !!this.accessibility.find((pro) => pro.label === label)?.checked;
  }
  formetedDate() {
    return format(this.date, this.dateFormat);
  }
}
