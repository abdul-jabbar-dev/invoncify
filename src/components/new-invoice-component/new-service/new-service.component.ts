import { Component, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-new-service',
  templateUrl: './new-service.component.html',
  styleUrls: ['./new-service.component.css'],
})
export class NewServiceComponent implements OnInit {
  listOfData:
    | {
        [index: number]: {
          description: string;
          price: number;
          quantity: number;
        };
      }
    | undefined;

  ngOnInit(): void {
    this.listOfData = {
      0: { description: '', price: NaN, quantity: NaN },
    };
    this.updateData();
  }

  drop(event: CdkDragDrop<any[]>): void {
    if (this.listOfData) {
      const itemsArray = Object.entries(this.listOfData);
      moveItemInArray(itemsArray, event.previousIndex, event.currentIndex);

      this.listOfData = {};
      itemsArray.forEach(([key, value], index) => {
        if (this.listOfData) {
          this.listOfData[index] = value;
        }
      });
    }
    this.updateData();
  }

  addField(): void {
    if (this.listOfData) {
      const id = Object.keys(this.listOfData).length;
      this.listOfData[id] = { description: '', price: NaN, quantity: NaN };
    }
    this.updateData();
  }

  removeField(id: string): void {
    if (this.listOfData) {
      delete this.listOfData[Number(id)];
      this.listOfData = { ...this.listOfData };
    }
    this.updateData();
  }

  updateData(): void {
    if (this.listOfData) {
      console.log(this.listOfData);
    }
  }
}
