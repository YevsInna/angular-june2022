import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IPost} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts)
  }

  getById(id: number): Observable<IPost>{
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`)
  }
}
