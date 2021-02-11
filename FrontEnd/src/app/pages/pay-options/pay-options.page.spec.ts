import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayOptionsPage } from './pay-options.page';

describe('PayOptionsPage', () => {
  let component: PayOptionsPage;
  let fixture: ComponentFixture<PayOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
