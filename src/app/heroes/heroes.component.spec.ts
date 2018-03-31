import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { of } from 'rxjs/observable/of';

import { HeroesComponent } from './heroes.component';
import { HeroService } from '../hero.service';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    const svcSpy = jasmine.createSpyObj('heroService', ['getHeroes']);
    svcSpy.getHeroes.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [RouterModule],
      providers: [
        {provide: HeroService, useValue: svcSpy}
      ],
      declarations: [HeroesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
