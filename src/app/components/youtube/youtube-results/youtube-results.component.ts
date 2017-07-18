import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as YTPlayer from 'yt-player';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'youtube-results',
  templateUrl: './youtube-results.component.html',
  styleUrls: ['./youtube-results.component.scss']
})

export class YoutubeResultsComponent implements OnInit {
  youtubeState$;
  youtubeVideos: Array<Object>;

  constructor(private store: Store<any>) {
    this.youtubeState$ = this.store.select('youtube');
  }


   ngOnInit() {
    this.youtubeState$.subscribe(response => {
      console.log('response changed ', response);
      this.youtubeVideos = response.results;
    }) 
  }

}