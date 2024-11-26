import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechstackComponent } from './techstack.component';

describe('TechstackComponent', () => {
  let component: TechstackComponent;
  let fixture: ComponentFixture<TechstackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechstackComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechstackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the tech stack', () => {
    expect(fixture.nativeElement.querySelectorAll('i').length).toBe(
      component.techStack.length
    );
  });

  it('should render the tooltip and display the text', () => {
    expect(fixture.nativeElement.querySelector('app-tooltip')).toBeTruthy();
    expect(fixture.nativeElement.textContent).toContain('Angular');
  });

  it('should bind the mouse move listener', () => {
    const mouseMoveListener = component['mouseMoveListener'];
    component.ngOnInit();
    expect(mouseMoveListener).toBeDefined();
  });

  it('should update isHovered based on mouse position', () => {
    Object.defineProperty(window, 'innerHeight', {
      value: 1000,
      writable: true,
    });

    const handleMouseMove = component['handleMouseMove'].bind(component);

    handleMouseMove(new MouseEvent('mousemove', { clientY: 950 }));
    expect(component.isHovered).toBeTrue();

    handleMouseMove(new MouseEvent('mousemove', { clientY: 800 }));
    expect(component.isHovered).toBeFalse();
  });
});
