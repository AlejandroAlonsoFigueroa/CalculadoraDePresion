import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicalculadoraComponent } from './micalculadora.component';

describe('MicalculadoraComponent', () => {
  let component: MicalculadoraComponent;
  let fixture: ComponentFixture<MicalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicalculadoraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
