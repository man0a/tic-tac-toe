import ScoreBoard from "./ScoreBoard"
import { createStore } from "redux";
import { increaseScore } from "../../redux/actions";
import rootReducer from "../../redux/reducers"

describe('Component: <ScoreBoard />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScoreBoard  store={configureStore([])({})} />).dive();
  });

  it('renders without crashing and players have an initial score of zero', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.state('playerO')).toEqual(0);
    expect(wrapper.state('playerX')).toEqual(0);
  });

  it('test reducer for increasing score for specified player', () => {
    let store = createStore(rootReducer);

    expect(store.getState().playerO).toEqual(0);
    expect(store.getState().playerX).toEqual(0);

    store.dispatch(increaseScore("X"));

    expect(store.getState().playerO).toEqual(0);
    expect(store.getState().playerX).toEqual(1);

    store.dispatch(increaseScore("O"));

    expect(store.getState().playerO).toEqual(1);
    expect(store.getState().playerX).toEqual(1);

    store.dispatch(increaseScore("STALEMATE"));

    expect(store.getState().playerO).toEqual(1);
    expect(store.getState().playerX).toEqual(1);
  });

  it('test action for correct dispatch', () => {
    const buildStore = configureStore([]);
    const mockStore = buildStore({});

    mockStore.dispatch(increaseScore("X"));

    const expectedPayload = [{"payload": "X", "type": "INCREASE_SCORE"}];
    expect(mockStore.getActions()).toEqual(expectedPayload);
  });
});
