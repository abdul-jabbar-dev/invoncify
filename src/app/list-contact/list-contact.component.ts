import { Component } from '@angular/core';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css'],
})
export class ListContactComponent {
  clipToContante($event: any) {
    const content = document.getElementById($event.target.id)?.innerText;
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
