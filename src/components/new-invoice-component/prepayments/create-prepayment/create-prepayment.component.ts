import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-prepayment',
  templateUrl: './create-prepayment.component.html',
  styleUrls: ['./create-prepayment.component.css'],
})
export class CreatePrepaymentComponent {
  @Input() data!: { description: string; price: number};
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() new: EventEmitter<number> = new EventEmitter<number>();
  onRemove(): void {
    this.remove.emit();
  }
  onNew() {
    this.new.emit();
  }
}
