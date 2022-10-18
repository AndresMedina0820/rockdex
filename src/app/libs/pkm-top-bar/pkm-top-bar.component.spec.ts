import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmTopBarComponent } from './pkm-top-bar.component';

describe('PkmTopBarComponent', () => {
  let component: PkmTopBarComponent;
  let fixture: ComponentFixture<PkmTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmTopBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
