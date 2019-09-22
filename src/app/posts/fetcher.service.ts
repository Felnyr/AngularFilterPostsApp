import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { map, catchError, filter, concatAll } from 'rxjs/operators';
import { Posts, Iposts } from 'src/app/posts/Posts.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {
  private dataArr: Iposts[];
  private filteredArr: Iposts[];
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map(x => {
        this.filteredArr = x;
        this.dataArr = x;
      }),
    )
  }

  filterMatch(input): void {
    this.filteredArr = this.dataArr.filter((x) => {
    return x.title.toLowerCase().match(input.toLowerCase());
  });
    // console.log(this.filteredArr);
  }

  getData(){
    return this.dataArr;
  }
  getfiltered(){
    return this.filteredArr;
  }
}
