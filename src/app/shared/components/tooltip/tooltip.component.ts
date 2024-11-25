import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  template: `
    <div
      class="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-1 text-olive-green bg-white-cream text-sm border-2 border-olive-green rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-50"
    >
      {{ text }}
    </div>
  `,
})
export class TooltipComponent {
  @Input() text = '';
}
