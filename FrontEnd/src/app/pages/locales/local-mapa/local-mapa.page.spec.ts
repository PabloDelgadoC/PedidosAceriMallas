import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalMapaPage } from './local-mapa.page';

describe('LocalMapaPage', () => {
  let component: LocalMapaPage;
  let fixture: ComponentFixture<LocalMapaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalMapaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalMapaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
