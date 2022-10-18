import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmButtonComponent } from './pkm-button.component';

describe('PkmButtonComponent', () => {
  let component: PkmButtonComponent;
  let fixture: ComponentFixture<PkmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
