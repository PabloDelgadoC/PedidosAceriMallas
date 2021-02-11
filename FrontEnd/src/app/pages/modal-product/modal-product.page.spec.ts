import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProductPage } from './modal-product.page';

describe('ModalProductPage', () => {
  let component: ModalProductPage;
  let fixture: ComponentFixture<ModalProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
