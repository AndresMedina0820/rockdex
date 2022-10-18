import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmFavButtonComponent } from './pkm-fav-button.component';

describe('PkmFavButtonComponent', () => {
  let component: PkmFavButtonComponent;
  let fixture: ComponentFixture<PkmFavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmFavButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmFavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
