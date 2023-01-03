import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickOptionComponent } from './quick-option.component';

describe('QuickOptionComponent', () => {
  let component: QuickOptionComponent;
  let fixture: ComponentFixture<QuickOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
