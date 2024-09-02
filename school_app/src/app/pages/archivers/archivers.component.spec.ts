import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiversComponent } from './archivers.component';

describe('ArchiversComponent', () => {
  let component: ArchiversComponent;
  let fixture: ComponentFixture<ArchiversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiversComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
