import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: [],
})
export class CreateServiceComponent {
  @Input() data!: { description: string; price: number; quantity: number };
  @Output() remove: EventEmitter<number> = new EventEmitter<number>();
  @Output() new: EventEmitter<number> = new EventEmitter<number>();
  onRemove(): void {
    this.remove.emit();
  }
  onNew() {
    this.new.emit();
  }
}
