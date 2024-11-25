import { Component } from '@angular/core';
import { TooltipComponent } from '../../shared/components/tooltip/tooltip.component';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [TooltipComponent],
  host: {
    class:
      'absolute bottom-0 w-full mb-4 flex flex-col items-center overflow-y-hidden',
  },
  template: `
    <div
      #techstackTitle
      class="text-center text-2xl text-olive-green absolute bottom-0 w-full cursor-default motion-safe:animate-bounce-small"
      (mouseenter)="isHovered = true"
    >
      Tech Stack
    </div>
    <div class="overflow-visible">
      <div
        #techstack
        class="flex items-center justify-center gap-4 p-4 w-fit text-4xl text-olive-green bg-white-cream rounded-2xl z-10 border-2 border-olive-green cursor-default"
        [class]="isHovered ? 'animate-fade-up' : 'animate-fade-down'"
        (mouseleave)="isHovered = false"
      >
        <div class="relative group">
          <i class="devicon-angular-plain"></i>
          <app-tooltip text="Angular" />
        </div>
        <div class="relative group">
          <i class="devicon-react-original"></i>
          <app-tooltip text="React" />
        </div>
        <div class="relative group">
          <i class="devicon-typescript-plain"></i>
          <app-tooltip text="TypeScript" />
        </div>
        <div class="relative group">
          <i class="devicon-rxjs-plain"></i>
          <app-tooltip text="RxJS" />
        </div>
        <div class="relative group">
          <i class="devicon-supabase-plain"></i>
          <app-tooltip text="Supabase" />
        </div>
        <div class="relative group">
          <i class="devicon-tailwindcss-plain"></i>
          <app-tooltip text="Tailwind CSS" />
        </div>
        <div class="relative group">
          <i class="devicon-nodejs-plain"></i>
          <app-tooltip text="Node.js" />
        </div>
        <div class="relative group">
          <i class="devicon-javascript-plain"></i>
          <app-tooltip text="JavaScript" />
        </div>
        <div class="relative group">
          <i class="devicon-html5-plain"></i>
          <app-tooltip text="HTML5" />
        </div>
        <div class="relative group">
          <i class="devicon-css3-plain"></i>
          <app-tooltip text="CSS3" />
        </div>
        <div class="relative group">
          <i class="devicon-mongodb-plain"></i>
          <app-tooltip text="MongoDB" />
        </div>
        <div class="relative group">
          <i class="devicon-express-original"></i>
          <app-tooltip text="Express.js" />
        </div>
      </div>
    </div>
  `,
})
export class TechstackComponent {
  isHovered = false;
}
