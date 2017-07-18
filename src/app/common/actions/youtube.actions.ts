import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import axios from 'axios';

const type = (action) => {
  return action;
}

export const ActionTypes = {
  YOUTUBE_SEARCH: type('[Youtube] Search'),
  YOUTUBE_SEARCH_SUCCESS: type('[Youtube] Search Success'),
  YOUTUBE_SEARCH_FAIL: type('[Youtube] Search Fail'),
  YOUTUBE_LOAD_MORE: type('[Youtube] Search Load More'),
  YOUTUBE_LOAD_MORE_SUCCESS: type('[Youtube] Search Load More Success'),
  YOUTUBE_LOAD_MORE_FAIL: type('[Youtube] Search Load More Fail'),
};

export class YoutubeSearchAction implements Action {
  type = ActionTypes.YOUTUBE_SEARCH;
  constructor(public payload: any) {

  }
}


export class YoutubeSearchSuccess implements Action {
  type = ActionTypes.YOUTUBE_SEARCH_SUCCESS;
  constructor(public payload?: any) {

  }
}

export class YoutubeSearchFail implements Action {
  type = ActionTypes.YOUTUBE_SEARCH_FAIL;
  constructor(public payload?: any) {

  }
}

export class YoutubeLoadMore implements Action {
  type = ActionTypes.YOUTUBE_LOAD_MORE;
  constructor(public payload?: any) {

  }
}