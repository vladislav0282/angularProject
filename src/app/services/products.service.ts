import { ErrorService } from './error.service';
import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import { IProduct } from "../models/product";
import { Observable, retry, throwError } from "rxjs";
import { delay, catchError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProductsService{
    constructor(private http: HttpClient,
        private errorService: ErrorService
        
        ){ 
    }

    getAll(): Observable<IProduct[]>{
       return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
        params: new HttpParams().append('limit', 5) // Устанавливаем лимит на количесство продуктов,Можно через метод append
       
        // params: new HttpParams({
        //     fromString: 'limit=5' Устанавливаем лимит на количесство продуктов,Можно через объект
        // })
        // params: new HttpParams({
        //     fromObject: {limit:5} Устанавливаем лимит на количесство продуктов,Можно через строку
        // })
       }).pipe( 
        delay(200), // загрузка с искуственно созданной задержкой
        retry(2),
        catchError(this.errorHandler.bind(this))
       )    
    }

    private errorHandler(error: HttpErrorResponse){
        this.errorService.handle(error.message)
        return throwError(()=>error.message)
    }
    
}