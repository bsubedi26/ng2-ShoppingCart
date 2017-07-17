import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import axios from 'axios';

function type(action) {
  return action;
}

export const ActionTypes = {
  YOUTUBE_SEARCH: type('[Youtube] Search'),
  YOUTUBE_SEARCH_SUCCESS: type('[Youtube] Search Success'),
  YOUTUBE_SEARCH_FAIL: type('[Youtube] Search Fail'),
};

@Injectable()
export class YoutubeAction {

  constructor(private store: Store<any>) {

  }
  getState(): Observable<any> {
    return this.store.select('youtube');
  }

  searchVideos(query) {
    return axios({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'get',
      params: {
        key: 'AIzaSyDZYAKp1cVowIRmnV4jXh_C2x0vDVLHvYU',
        part: 'snippet',
        type: 'video',
        q: query,
        videoDimension: '2d',
        videoEmbeddable: 'true'
      }
    }).then((res) => {
      console.log('RESPONSE ', res);
      localStorage.setItem('lastQuery', query);
      const results = {
        query: query,
        nextPageToken: res.data.nextPageToken,
        items: res.data.items
      };
      this.store.dispatch({
        type: ActionTypes.YOUTUBE_SEARCH_SUCCESS,
        payload: {
          results
        }
      });
      return results;
    }).catch((error) => {
      this.store.dispatch({
        type: ActionTypes.YOUTUBE_SEARCH_FAIL,
        payload: {
          error
        }
      });
      return error;
    });

  }
};
