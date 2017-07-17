import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { YoutubeAction } from 'app/common/actions/youtube.actions';

import { Store } from '@ngrx/store';
// npm install yt-player
import * as YTPlayer from 'yt-player';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'youtube-results',
  templateUrl: './youtube-results.component.html',
  styleUrls: ['./youtube-results.component.scss']
})

export class YoutubeResultsComponent implements OnInit {
  @Input() youtubeState;
  youtubePlayer: YTPlayer;
  el: any;
  id: any;
  show = true;
  // player = new YT.Player('video-screening', {
  //   videoId: this.props.videoId,
  //   playerVars: { autoplay: 1, loop: 1, playlist: this.props.videoId }
  // });

  constructor(private youtubeAction: YoutubeAction, private elementRef: ElementRef) {
    this.el = elementRef.nativeElement;
    // console.log(this.el);
    // this.youtubePlayer = new YTPlayer(this.el);
    // this.youtubePlayer.load('GKSRyLdjsPA')
    // this.youtubePlayer.setVolume(100)
    // this.youtubePlayer.on('playing', () => {
    //   console.log(this.youtubePlayer.getDuration());
    // });

  }

  checkState() {
    this.setShow(!this.show);
  }

  async delay(functionToDelay, time) {
    return setTimeout(functionToDelay, time)
  }

  async ngOnInit() {
    // console.log('youtube results init', this.youtubeState);
    // await this.delay(this.setShow(false), 2000);
  }

  setShow(value: boolean) {
    this.show = value;
  }

}