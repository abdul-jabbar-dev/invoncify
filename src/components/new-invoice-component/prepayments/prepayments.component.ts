import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prepayments',
  templateUrl: './prepayments.component.html',
  styleUrls: ['./prepayments.component.css'],
})
export class PrepaymentsComponent implements OnInit {
  listOfData:
    | {
        [index: number]: {
          description: string;
          price: number;
          quantity: number;
        };
      }
    | undefined;
  submit() {
    console.log(this.listOfData);
  }

  drop(event: CdkDragDrop<any[]>): void {
    if (this.listOfData) {
      const itemsArray = Object.entries(this.listOfData);
      moveItemInArray(itemsArray, event.previousIndex, event.currentIndex);
      let arr: any;

      this.listOfData = itemsArray.map((i) => i[1]);
      // this.listOfData = itemsArray.reduce((acc, [key, value]) => {
      //   acc[Number(key)] = value; // Ensure keys are numeric
      //   return acc;
      // }, {} as { [index: number]: { description: string; price: number; quantity: number } });
    }
  }
  ngOnInit(): void {
    this.listOfData = {
      0: { description: '', price: NaN, quantity: NaN },
    };
  }

  addField(): void {
    if (this.listOfData) {
      const id = Object.keys(this.listOfData).length;
      this.listOfData[id] = { description: '', price: NaN, quantity: NaN };
    }
  }

  removeField(id: string): void {
    if (this.listOfData) {
      delete this.listOfData[Number(id)];
    }
  }
}

