import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './contact-modal.component';
import { By } from '@angular/platform-browser';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    component.title = 'Contact Me';
    fixture.detectChanges();
    expect(component.title).toBe('Contact Me');
  });

  it('should close the modal when the close button is clicked', () => {
    spyOn(component.close, 'emit');

    component.isOpen = true;
    fixture.detectChanges();

    const closeButton = fixture.debugElement.query(By.css('button'));
    closeButton.triggerEventHandler('click', null);

    expect(component.close.emit).toHaveBeenCalled();
  });

  it('should close the modal when the backdrop is clicked', () => {
    spyOn(component.close, 'emit');

    component.isOpen = true;
    fixture.detectChanges();

    const backdrop = fixture.debugElement.query(By.css('.fixed'));
    backdrop.triggerEventHandler('click', { target: backdrop.nativeElement });

    expect(component.close.emit).toHaveBeenCalled();
  });
});
