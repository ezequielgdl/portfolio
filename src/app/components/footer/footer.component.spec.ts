import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { ModalComponent } from '../contact-modal/contact-modal.component';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a modal component', () => {
    expect(
      fixture.debugElement.query(By.directive(ModalComponent))
    ).toBeTruthy();
  });

  it('should have a contact me text', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('contact me');
  });

  it('should open the modal when the contact me text is clicked', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.isModalOpen).toBe(true);
  });

  it('should pass the correct title and content to the modal', () => {
    const modal = fixture.debugElement.query(By.directive(ModalComponent));
    expect(modal.componentInstance.title).toBe('Contact Me');
  });
});
