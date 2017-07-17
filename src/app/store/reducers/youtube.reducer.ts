import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/youtube.actions';

export interface IYoutubeState {
  status: string;
  results: Array<Object>;
}

const _initialState: IYoutubeState = {
  status: 'new',
  results: []
};

export const reducer = (state = _initialState, action: Action): IYoutubeState => {
  switch (action.type) {
    case ActionTypes.YOUTUBE_SEARCH_SUCCESS: {

      return {
        ...state,
        results: action.payload.results
      }
    }
    case ActionTypes.YOUTUBE_SEARCH_FAIL: {

      return {
        ...state,
        error: action.payload.error
      }
    }

    default:
      return state;

  }

};
