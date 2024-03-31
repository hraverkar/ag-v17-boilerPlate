import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanBoardProjectComponent } from './kanban-board-project.component';

describe('KanbanBoardProjectComponent', () => {
  let component: KanbanBoardProjectComponent;
  let fixture: ComponentFixture<KanbanBoardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KanbanBoardProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KanbanBoardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
