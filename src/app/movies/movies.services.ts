// movies/movie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '03e8a8c5d7e6f46f14bfbed9a2c746f3'; // Thay API key 
  private apiUrl = 'https://api.themoviedb.org/3/movie/popular';

  constructor(private http: HttpClient) {}

  getPopularMovies(page: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?api_key=${this.apiKey}&page=${page}`);
  }
}
