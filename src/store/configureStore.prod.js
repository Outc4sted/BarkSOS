import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import soundsMiddleware from 'redux-sounds';


const router = routerMiddleware(browserHistory);

const soundsData = {
  buffer: true,
  barks: {
    urls: ['data/barkSprite.mp3'],
    sprite: {
      shortBark: [0, 500],
      longBark: [600, 1250]
    }
  }
};
const loadedSoundsMiddleware = soundsMiddleware(soundsData);
/**
 * Creates a preconfigured store.
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, router)
  );
}
