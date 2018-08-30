import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux'
import { rootReducer } from './clickerApi/reducers/rootReducer'
import { UNLOCK_ACHIEVEMENT } from './clickerApi/actions/clickerActions';

const achievementUnlockerMiddleware = store => next => action => {
  if (action.type === UNLOCK_ACHIEVEMENT) {
    return next(action);
  }

  next(action);

  const achievements = store.getState().achievements
  achievements && achievements.map(
    achievement =>
    !achievement.unlocked &&
    achievement.shouldBeUnlcoked && 
    achievement.shouldBeUnlcoked(store.getState()) &&
    store.dispatch({
      type: UNLOCK_ACHIEVEMENT,
      achievementId: achievement.id,  
    }) && 
    store.dispatch({
      type: 'SET_UNLOCKED_ACHIEVEMENT',
      achievement: achievement
    }) 
  )
}

const store = createStore( 
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(achievementUnlockerMiddleware),
)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,

  document.getElementById('root')

);

registerServiceWorker();
