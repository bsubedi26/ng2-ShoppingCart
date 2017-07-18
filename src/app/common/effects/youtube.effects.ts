import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Response } from '@angular/http';
import { ActionTypes, YoutubeSearchSuccess, YoutubeSearchFail } from '../actions/youtube.actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import { withLatestFrom } from 'rxjs/operator/withLatestFrom';

@Injectable()
export class YoutubeEffects {

  @Effect()
  youtubeSearch$ = this.actions$
    .ofType(ActionTypes.YOUTUBE_SEARCH)
    .switchMap((action: Action) => {
      const query = action.payload;
      const params = {
        key: 'AIzaSyDZYAKp1cVowIRmnV4jXh_C2x0vDVLHvYU',
        part: 'snippet',
        type: 'video',
        q: query,
        videoDimension: '2d',
        videoEmbeddable: 'true'
      };

      return this.httpService.getWithParams('https://www.googleapis.com/youtube/v3/search', params)
        // .map((response) => console.log('response ', response))
        .map((response) => {
          console.log('.map RESPONSE ', response);
          const payload = {
            query: query, 
            response: response
          }
          return { type: ActionTypes.YOUTUBE_SEARCH_SUCCESS, payload: payload };
        })
        .catch((error) =>  {
          console.log('.catch error  ', error);
          return Observable.of(({ type: ActionTypes.YOUTUBE_SEARCH_FAIL, payload: error.json() }));
        });
     
    })

  @Effect()
  youtubeLoadMore$ = this.actions$
    .ofType(ActionTypes.YOUTUBE_LOAD_MORE)
    .switchMap((action: Action) => {
      const { query, nextPageToken } = action.payload;
      const params = {
        key: 'AIzaSyDZYAKp1cVowIRmnV4jXh_C2x0vDVLHvYU',
        part: 'snippet',
        type: 'video',
        q: query,
        videoDimension: '2d',
        videoEmbeddable: 'true',
        pageToken:nextPageToken
      };

      return this.httpService.getWithParams('https://www.googleapis.com/youtube/v3/search', params)
        .map((response) => {
          console.log('.map RESPONSE ', response);
          return { type: ActionTypes.YOUTUBE_LOAD_MORE_SUCCESS, payload: response };
        })
        .catch((error) => {
          console.log('.catch error  ', error);
          return Observable.of(({ type: ActionTypes.YOUTUBE_LOAD_MORE_FAIL, payload: error.json() }));
        });

    })

  constructor(private actions$: Actions, private store$: Store<any>, private httpService: HttpService, public router: Router) { }
}
