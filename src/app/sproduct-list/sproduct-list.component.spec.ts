import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SproductListComponent } from './sproduct-list.component';

describe('SproductListComponent', () => {
  let component: SproductListComponent;
  let fixture: ComponentFixture<SproductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SproductListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
