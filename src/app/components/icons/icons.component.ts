import { Component } from '@angular/core';

@Component({
  selector: 'app-icons',
  standalone: true,
  imports: [],
  host: {
    class: 'flex gap-2',
  },
  template: `
    <button class="text-olive-green text-2xl">
      <a
        class="hover:text-black"
        href="https://github.com/ezequielgdl"
        target="_blank"
      >
        <i class="devicon-github-original"></i>
      </a>
    </button>
    <button class="text-olive-green hover:text-olive-green-dark text-2xl">
      <a href="https://www.linkedin.com/in/ezequieldelima/" target="_blank">
        <i class="devicon-linkedin-plain"></i>
      </a>
    </button>
  `,
})
export class IconsComponent {}
