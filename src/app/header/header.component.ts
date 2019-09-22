import { Component, OnInit, Input, Output } from '@angular/core';
import { PassDataSiblingService } from 'src/app/header/pass-data-sibling.service';
import { FetcherService } from 'src/app/posts/fetcher.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private inputData: PassDataSiblingService, private service: FetcherService) { }
  private passArr;

  ngOnInit() {
    this.inputData.currentMessage.subscribe(message => this.passArr = message);
  }

  onKeyUp(e) {
    this.inputData.changeMessage(e.target.value);
    this.service.filterMatch(e.target.value);
  }

}
