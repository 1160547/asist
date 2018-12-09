import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MessagesComponent } from '../messages/messages.component';
import { ProdutosComponent } from '../produtos/produtos.component';
import { AcabamentoDetailComponent } from '../acabamento-detail/acabamento-detail.component';
import { AcabamentosComponent } from '../acabamentos/acabamentos.component';
import { MaterialDetailComponent } from '../material-detail/material-detail.component';
import { MaterialComponent } from '../materiais/material.component';
import { ItemComponent } from '../itens/itens.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { ProdutoDetailComponent } from '../produto-detail/produto-detail.component';

describe('ProdutosComponent', () => {
  let component: ProdutosComponent;
  let fixture: ComponentFixture<ProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent,
        DashboardComponent,
        MessagesComponent,
        ProdutosComponent,
        ProdutoDetailComponent,
        AcabamentoDetailComponent,
        AcabamentosComponent,
        MaterialDetailComponent,
        MaterialComponent,
        ItemComponent,
        ItemDetailComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
