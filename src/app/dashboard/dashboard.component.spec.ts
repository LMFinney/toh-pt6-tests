import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';
import { HeroService } from '../hero.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroService', ['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        { provide: HeroService, useValue: svcSpy }
      ],
      declarations: [DashboardComponent, HeroSearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
