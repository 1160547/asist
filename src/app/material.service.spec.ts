import { TestBed } from '@angular/core/testing';
import { MaterialService } from './material.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessagesComponent } from './messages/messages.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { AcabamentoDetailComponent } from './acabamento-detail/acabamento-detail.component';
import { AcabamentosComponent } from './acabamentos/acabamentos.component';
import { MaterialDetailComponent } from './material-detail/material-detail.component';
import { MaterialComponent } from './materiais/material.component';
import { ItemComponent } from './itens/itens.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
describe('MaterialService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
    ]}));

  it('should be created', () => {
    const service: MaterialService = TestBed.get(MaterialService);
    expect(service).toBeTruthy();
  });
});
