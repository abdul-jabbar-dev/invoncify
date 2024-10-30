import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { format } from 'date-fns';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { InvoiceService } from '../services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { RInvoice } from '../types/invoice.model';

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
  selector: 'app-previewer-layout',
  templateUrl: './previewer-layout.component.html',
  styleUrls: ['./previewer-layout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlankLayoutComponent implements OnInit {
  @ViewChild('pdfSection', { static: false }) pdfSection!: ElementRef;
  @Output() elementSent = new EventEmitter<ElementRef>();

  constructor(
    private route: ActivatedRoute,
    private invoiceRequest: InvoiceService,
    private cdr: ChangeDetectorRef
  ) {}

  @Output() template: string = 'Business';
  @Output() fontSize: number = 12;
  @Output() logoSize: number = 40;
  @Output() color: string = '#697689';
  @Output() dateFormat: string = 'MM/dd/yyyy';
  @Output() language: Language = Language.English;
  @Output() accessibility: {
    label: string;
    value: string;
    checked?: boolean;
  }[] = [
    { label: 'Logo', value: 'Logo', checked: true },
    { label: 'Symbol', value: 'Symbol', checked: true },
    { label: 'Recipent', value: 'Recipent', checked: true },
    { label: 'Accent Color', value: 'Accent Color', checked: true },
  ];

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

  @Output() alignment: Alignment = Alignment.Top;

  isLoading: boolean = false;
  @Output() invoice!: RInvoice;
  ngOnInit(): void {
    this.isLoading = true;
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.invoiceRequest.getAInvoice(id).subscribe(
          (res) => {
            this.invoice = res;
            this.isLoading = false;
            this.cdr.markForCheck();
          },
          (error) => {
            console.error('Error fetching invoice:', error);
            this.isLoading = false;
          }
        );
      } else {
        console.warn('No invoice ID provided');
        this.isLoading = false;
      }
    });
  }

  hasAccessibility(label: string) {
    const isIt = !!this.accessibility.find((pro) => pro.label === label)
      ?.checked;
    if (label === 'Accent Color' && !isIt) {
      this.color = '#697689';
    }
    return isIt;
  }

  getDate(): string {
    return format(new Date(Date.now()), this.dateFormat);
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
  savePdf() {
    html2canvas(this.pdfSection.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // Set image width (in mm)
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('download.pdf');
    });
  }
}
