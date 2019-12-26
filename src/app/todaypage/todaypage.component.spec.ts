import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaypageComponent } from './todaypage.component';

describe('TodaypageComponent', () => {
  let component: TodaypageComponent;
  let fixture: ComponentFixture<TodaypageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodaypageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodaypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
