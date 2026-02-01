import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post.dto";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

    private readonly httpClient = inject(HttpClient);
    private readonly API_URL = 'https://jsonplaceholder.typicode.com';

    getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${this.API_URL}/posts`);
    }

    }