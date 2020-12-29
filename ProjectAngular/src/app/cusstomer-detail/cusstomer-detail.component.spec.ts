import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusstomerDetailComponent } from './cusstomer-detail.component';

describe('CusstomerDetailComponent', () => {
  let component: CusstomerDetailComponent;
  let fixture: ComponentFixture<CusstomerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusstomerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusstomerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
