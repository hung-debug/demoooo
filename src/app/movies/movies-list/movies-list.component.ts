// movies/movie-list/movie-list.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService} from '../movies.services';
import { Movie } from '../../shared/movies.interface';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-movie-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MovieListComponent implements OnInit {
  popularMovies: Movie[] = [];
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private movieService: MovieService,private router: Router) {}
  searchQuery: string = '';
  onClick() {
    this.router.navigate(['/login']);
  }
  onSearch() {
    console.log(this.searchQuery);
  }
  ngOnInit(): void {
    this.loadPopularMovies();
  }

  loadPopularMovies(): void {
    this.movieService.getPopularMovies(this.currentPage).subscribe(
      (data) => {
        this.popularMovies = data.results;
        this.totalPages = data.total_pages;
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadPopularMovies();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadPopularMovies();
    }
  }

  
}
