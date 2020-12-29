import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteAppComponent } from './vote-app.component';

describe('VoteAppComponent', () => {
  let component: VoteAppComponent;
  let fixture: ComponentFixture<VoteAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
