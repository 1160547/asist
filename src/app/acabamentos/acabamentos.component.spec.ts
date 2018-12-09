import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcabamentosComponent } from './acabamentos.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AcabamentoDetailComponent } from '../acabamento-detail/acabamento-detail.component';
import { ProdutoDetailComponent } from '../produto-detail/produto-detail.component';
import { ProdutosComponent } from '../produtos/produtos.component';
import { MaterialDetailComponent } from '../material-detail/material-detail.component';
import { ItemComponent } from '../itens/itens.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MessagesComponent } from '../messages/messages.component';
import { MaterialComponent } from '../materiais/material.component';
import { ItemDetailComponent } from '../item-detail/item-detail.component';

describe('AcabamentosComponent', () => {
  let component: AcabamentosComponent;
  let fixture: ComponentFixture<AcabamentosComponent>;

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
    fixture = TestBed.createComponent(AcabamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
