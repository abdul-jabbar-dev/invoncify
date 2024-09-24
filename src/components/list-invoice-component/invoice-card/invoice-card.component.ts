import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.css'],
})
export class InvoiceCardComponent implements OnChanges {
  @Input() item!: {
    status: string;
    color: string;
    bg: string;
    border: string;
    icon: string;
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.item);
  }
  visible: boolean = false;

  clickMe(): void {
    this.visible = false;
  }
  change(value: boolean): void {
    console.log(value);
  }
  copyToClipboard() {
    const content = document.getElementById('content-to-copy')?.innerText;

    if (content) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          console.log('Content copied to clipboard');
        })
        .catch((err) => {
          console.error('Error copying content: ', err);
        });
    }
  }
}
