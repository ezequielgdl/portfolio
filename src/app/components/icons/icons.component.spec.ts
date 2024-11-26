import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsComponent } from './icons.component';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the icons', () => {
    expect(fixture.nativeElement.querySelectorAll('i').length).toBe(2);
  });

  it('should render the github icon', () => {
    expect(
      fixture.nativeElement.querySelector('i.devicon-github-original')
    ).toBeTruthy();
  });

  it('should render the linkedin icon', () => {
    expect(
      fixture.nativeElement.querySelector('i.devicon-linkedin-plain')
    ).toBeTruthy();
  });

  it('should have the correct href attributes', () => {
    const githubLink = fixture.nativeElement.querySelector('a[href*="github"]');
    const linkedinLink = fixture.nativeElement.querySelector(
      'a[href*="linkedin"]'
    );
    expect(githubLink.href).toBe('https://github.com/ezequielgdl');
    expect(linkedinLink.href).toBe(
      'https://www.linkedin.com/in/ezequieldelima/'
    );
  });

  it('should open links in new tabs', () => {
    const githubLink = fixture.nativeElement.querySelector('a[href*="github"]');
    const linkedinLink = fixture.nativeElement.querySelector(
      'a[href*="linkedin"]'
    );
    expect(githubLink.target).toBe('_blank');
    expect(linkedinLink.target).toBe('_blank');
  });
});
