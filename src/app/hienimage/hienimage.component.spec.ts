import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HienimageComponent } from './hienimage.component';

describe('HienimageComponent', () => {
  let component: HienimageComponent;
  let fixture: ComponentFixture<HienimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HienimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HienimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
