import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-previewer',
  templateUrl: './previewer.component.html',
  styleUrls: ['./previewer.component.css'],
})
export class PreviewerComponent implements OnInit {
  id: string | null = null;
  @Input() imgWidth: number = 50;

  @Input() template: string = 'minimal';
  @Input() fontSize: number = 12;
  @Input() color: string = '#697689';
  @Input() dateFormat: string = 'MM/dd/yyyy';
  @Input() language: Language = Language.English;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }
}
