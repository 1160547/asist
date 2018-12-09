import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Produto } from './model/produto';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  private produtosUrl = 'https://arqsiprojetogoncalopaco.azurewebsites.net/api/produto';  // URL to web api
  
  constructor(private http: HttpClient,
    private messageService: MessageService) { }


  /** GET produts from the server */
  getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.produtosUrl)
      .pipe(
        tap(_ => this.log('fetched Produtos')),
        catchError(this.handleError('getProdutos', []))
      );
  }


   /** GET product by id. Return `undefined` when id not found */
   getProdutoNo404<Data>(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/?id=${id}`;
    return this.http.get<Produto[]>(url)
      .pipe(
        map(produtos => produtos[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} product `);
        }),
        catchError(this.handleError<Produto>(`getProduto `))
      );
  }
  
  /** GET product by id. Will 404 if id not found */
  getProduto(id: number): Observable<Produto> {
    const url = `${this.produtosUrl}/${id}`;
    return this.http.get<Produto>(url).pipe(
      tap(_ => this.log(`fetched produto `)),
      catchError(this.handleError<Produto>(`getProduto `))
    );
  }

   /* GET products whose name contains search term */
   searchProducts(term: string): Observable<Produto[]> {
    if (!term.trim()) {
      // if not search term, return empty product array.
      return of([]);
    }
    return this.http.get<Produto[]>(`${this.produtosUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found produtos matching "${term}"`)),
      catchError(this.handleError<Produto[]>('searchProdutos', []))
    );
  }

  adicionarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.produtosUrl, produto, httpOptions).pipe(
      tap((produto: Produto) => alert(`Adicionado produto!`)),
      catchError(this.handleError<Produto>('adicionar produto'))
    );
  }
 
  /** DELETE: delete the product from the server */
  deleteproduto (produto: Produto | number): Observable<Produto> {
    const id = typeof produto === 'number' ? produto : produto.id;
    const url = `${this.produtosUrl}/${id}`;
 
    return this.http.delete<Produto>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted product `)),
      catchError(this.handleError<Produto>('deleteProduct'))
    );
  }
 
  atualizarProduto(produto: Produto): Observable<any> {
    let url = this.produtosUrl + '/' + produto.id;
    return this.http.put(url, produto, httpOptions).pipe(
      tap(_ => alert(`Atualizado produto`)),
      catchError(this.handleError<any>('atualizar produto'))
    );
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a ItemService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`produtoService: ${message}`);
  }
}
