import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css'],
})
export class DynamicInputComponent {
  @Input() data!: { description: string; price: number; quantity: number };
  @Output() remove:EventEmitter<number> = new EventEmitter<number>();
  @Output() new:EventEmitter<number> = new EventEmitter<number>();
  onRemove(): void {
    this.remove.emit();
  }
  onNew(){
    this.new.emit()
  }
}
