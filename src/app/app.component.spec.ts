import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ScheduleModule,
        ContextMenuModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ej2-angular-schedule-open-context-menu-in-left-click'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ej2-angular-schedule-open-context-menu-in-left-click');
  });

  it('should have selectedDate property', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.selectedDate).toEqual(new Date(2019, 0, 10));
  });
});
