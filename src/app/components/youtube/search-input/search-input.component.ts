import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CartAction } from 'app/store/actions/cart.actions';
import { YoutubeAction } from 'app/store/actions/youtube.actions';

import { Store } from '@ngrx/store';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'youtube-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class YoutubeSearchInputComponent implements OnInit {
  searchValue: string;


  constructor (private youtubeAction: YoutubeAction) {

  }
  handleSearchSubmit() {
    console.log('submit ', this.searchValue);
    this.youtubeAction.searchVideos(this.searchValue)
    .then(data => console.log(data))
    .catch(data => console.log(data));
  }

  ngOnInit() {
    // console.log('youtube results init', this.youtubeState);
  }

}