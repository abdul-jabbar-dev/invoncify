import { Component, Output } from '@angular/core';
import { format } from 'date-fns';

enum Alignment {
  Center = 'center',
  Bottom = 'bottom',
  Middle = 'middle',
}

enum Language {
  English = 'english',
  Hindi = 'hindi',
  Chinese = 'chinese',
}

@Component({
  selector: 'app-previewer-layout',
  templateUrl: './previewer-layout.component.html',
  styleUrls: ['./previewer-layout.component.css'],
})
export class BlankLayoutComponent {
  @Output() template: string = 'minimal';
  @Output() fontSize: number = 12;
  @Output() logoSize: number = 40;
  @Output() color: string = '#697689';
  @Output() dateFormat: string = 'MM/dd/yyyy';
  @Output() language: Language = Language.English;

  dateFormatOptions: { label: string; format: string }[] = [
    {
      label: '09/25/2024',
      format: 'MM/dd/yyyy',
    },
    {
      label: '25/09/2024',
      format: 'dd/MM/yyyy',
    },
    {
      label: '2024-09-25',
      format: 'yyyy-MM-dd',
    },
    {
      label: 'September 25, 2024',
      format: 'MMMM dd, yyyy',
    },
    {
      label: '25 September 2024',
      format: 'dd MMMM yyyy',
    },
    {
      label: 'Wed, 25 Sep 2024',
      format: 'EEE, dd MMM yyyy',
    },
    {
      label: '09/25/24',
      format: 'MM/dd/yy',
    },
  ];
  checkOptionsOne = [
    { label: 'Logo', value: 'Logo', checked: true },
    { label: 'Symbol', value: 'Symbol' },
    { label: 'Recipent', value: 'Recipent' },
    { label: 'Accent Color', value: 'Accent Color' },
  ];

  alignment: Alignment = Alignment.Middle;

  getDate(): string {
    return format(new Date(Date.now()), this.dateFormat);
  }

  setDefault(arg0: any): void {
    console.log(arg0);
  }

  getAccesebilitis(
    arg0: { label: string; value: string; checked?: boolean }[]
  ): void {
    console.log(arg0);
  }

  setColor(newColor: string): void {
    const isValidHex = /^#([0-9A-F]{3}){1,2}$/i.test(newColor);
    if (isValidHex) {
      this.color = newColor;
    } else {
      console.error('Invalid color code:', newColor);
    }
  }
}
