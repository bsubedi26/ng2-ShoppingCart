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
        results: action.payload.response.items,
        query: action.payload.query,
        nextPageToken: action.payload.response.nextPageToken
      }
    }

    case ActionTypes.YOUTUBE_LOAD_MORE_SUCCESS: {
      return {
        ...state,
        results: state.results.concat(action.payload.items)
      }
    }

    case ActionTypes.YOUTUBE_SEARCH_FAIL: {
      return {
        ...state,
        error: action.payload.error
      }
    }
    case ActionTypes.YOUTUBE_LOAD_MORE_FAIL: {
      return {
        ...state,
        error: action.payload.error
      }
    }

    default:
      return state;

  }

};
