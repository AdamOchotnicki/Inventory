import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BredcrombsComponent } from './bredcrombs.component';

describe('BredcrombsComponent', () => {
  let component: BredcrombsComponent;
  let fixture: ComponentFixture<BredcrombsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BredcrombsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BredcrombsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
