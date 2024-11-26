import { Component, OnInit, OnDestroy } from '@angular/core';
import { TooltipComponent } from '../../shared/components/tooltip/tooltip.component';

@Component({
  selector: 'app-techstack',
  standalone: true,
  imports: [TooltipComponent],
  host: {
    class:
      'absolute bottom-0 flex flex-col items-center w-full pb-2 overflow-y-hidden',
  },
  template: `
    <div
      #techstackTitle
      class="text-center text-2xl pb-2 text-olive-green absolute bottom-0 w-full cursor-default motion-safe:animate-bounce-small"
    >
      Tech Stack
    </div>
    <div
      #techstack
      class="flex items-center justify-center gap-2 p-4 w-fit text-lg md:text-4xl text-olive-green bg-white-cream rounded-2xl z-10 border-2 border-olive-green cursor-default"
      [class]="isHovered ? 'animate-fade-up' : 'animate-fade-down'"
    >
      @for (tech of techStack; track tech.icon) {
      <div class="relative group">
        <i class="devicon-{{ tech.icon }}"></i>
        <app-tooltip [text]="tech.name" />
      </div>
      }
    </div>
  `,
})
export class TechstackComponent implements OnInit, OnDestroy {
  isHovered = false;
  private mouseMoveListener: ((event: MouseEvent) => void) | undefined;

  techStack = [
    { icon: 'angular-plain', name: 'Angular' },
    { icon: 'react-plain', name: 'React' },
    { icon: 'typescript-plain', name: 'TypeScript' },
    { icon: 'rxjs-plain', name: 'RxJS' },
    { icon: 'supabase-plain', name: 'Supabase' },
    { icon: 'tailwindcss-plain', name: 'Tailwind CSS' },
    { icon: 'nodejs-plain', name: 'Node.js' },
    { icon: 'javascript-plain', name: 'JavaScript' },
    { icon: 'html5-plain', name: 'HTML5' },
    { icon: 'css3-plain', name: 'CSS3' },
    { icon: 'mongodb-plain', name: 'MongoDB' },
    { icon: 'express-original', name: 'Express.js' },
  ];

  ngOnInit() {
    this.mouseMoveListener = this.handleMouseMove.bind(this);
    document.addEventListener('mousemove', this.mouseMoveListener);
  }

  ngOnDestroy() {
    if (this.mouseMoveListener) {
      document.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }

  private handleMouseMove(event: MouseEvent) {
    const viewportHeight = window.innerHeight;
    const triggerZone = viewportHeight * 0.9; // 90% of viewport height
    this.isHovered = event.clientY > triggerZone;
  }
}
