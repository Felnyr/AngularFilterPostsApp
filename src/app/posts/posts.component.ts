import { Component, OnInit, Input, AfterViewInit, OnChanges, DoCheck } from '@angular/core';
import { FetcherService } from 'src/app/posts/fetcher.service';
import { PassDataSiblingService } from 'src/app/header/pass-data-sibling.service';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, DoCheck {
  private siblingInput;
  private postsArr;

  constructor(private service: FetcherService, private inputData: PassDataSiblingService) { }

  ngOnInit() {
    this.inputData.currentMessage.subscribe(message => this.siblingInput = message);

    this.service.fetchData()
    .subscribe(() => this.postsArr = this.service.getData());
  }

  ngDoCheck(){
    this.postsArr = this.service.getfiltered()
  }
}
