import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListcomponent implements OnInit {
    @Output() filtersChanged = new EventEmitter<any>();
    filtersForm: FormGroup = new FormGroup({});
  genres: string[] = ['Chương Trình Truyền Hình', 'Phim Bí Ẩn'];

  ngOnInit() {
    this.filtersForm = new FormGroup({
      showMe: new FormControl('everything'),   
      searchAllReleases: new FormControl(true),
      fromDate: new FormControl(null),         
      toDate: new FormControl('2025-03-28')    
    });
    this.filtersForm.valueChanges.subscribe(values => {
      this.onFilterChange(values);
    });
  }

  onFilterChange(values: any) {
    this.filtersChanged.emit(values); 
}
}
