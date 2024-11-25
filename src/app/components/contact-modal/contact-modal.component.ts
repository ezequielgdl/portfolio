import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      *ngIf="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      (click)="onBackdropClick($event)"
    >
      <div class="bg-white-cream p-6 rounded-lg shadow-lg w-fit">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl text-olive-green font-medium">{{ title }}</h2>
          <button
            class="text-olive-green hover:text-olive-green-dark"
            (click)="close.emit()"
          >
            ✕
          </button>
        </div>
        <div class="modal-content">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Output() close = new EventEmitter<void>();

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('fixed')) {
      this.close.emit();
    }
  }
}
