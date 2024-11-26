import { Component } from '@angular/core';
import { ModalComponent } from '../contact-modal/contact-modal.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ModalComponent],
  host: {
    class: 'absolute top-0 right-0 px-6 py-3 text-olive-green cursor-pointer',
  },
  template: `
    <button (click)="isModalOpen = true">contact me</button>
    <app-modal
      [isOpen]="isModalOpen"
      (close)="isModalOpen = false"
      title="Contact Me"
    >
      <div class="flex flex-col gap-4">
        <p>
          Shoot me an email at
          <a href="mailto:ezequielgdl&#64;gmail.com"
            >ezequielgdl&#64;gmail.com</a
          >
        </p>
        <p>
          Find me on
          <a
            class="text-2xl"
            href="https://www.linkedin.com/in/ezequieldelima/"
            target="_blank"
          >
            <i class="devicon-linkedin-plain"></i>
          </a>
        </p>
      </div>
    </app-modal>
  `,
})
export class FooterComponent {
  isModalOpen = false;
}
