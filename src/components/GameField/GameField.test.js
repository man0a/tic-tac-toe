import GameField from "./GameField"

const count = (str, pattern) => {
  return ((str || '').match(pattern) || []).length
};

describe('Component: <GameField />', () => {
  describe('shallow render tests', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<GameField store={configureStore([])({})}/>).dive();
    });

    it('renders without crashing', () => {
      expect(wrapper).toHaveLength(1);

      expect(wrapper.state().currentPlayer).toEqual("circle");
      expect(wrapper.state().isFinished).toEqual(false);

      expect(wrapper.state().currentGameID).not.toBeNull();
      expect(wrapper.state().currentGame).not.toBeNull();
    });
  });

  describe('mount render tests', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<GameField store={configureStore([])({})}/>);
    });

    it('Board of size 3x3 with 9 elements is drawn', () => {
      expect(wrapper.find(".playing_square")).toHaveLength(9);
    });

    it('Move is drawn on board when grid is clicked', () => {
      expect(wrapper.html()).not.toContain("circle");
      expect(wrapper.html()).toContain("data=\"0-0\"");
      wrapper.find(".playing_square[data='0-0']").simulate('click');

      expect(wrapper.html()).toContain("circle");
      expect(wrapper.html()).not.toContain("data=\"0-0\"");
    });

    it('Moves alternate between circle and cross', () => {
      expect(wrapper.html()).not.toContain("circle");
      expect(wrapper.html()).not.toContain("cross");

      wrapper.find(".playing_square[data='0-0']").simulate('click');

      expect(wrapper.html()).toContain("circle");
      expect(wrapper.html()).not.toContain("cross");

      wrapper.find(".playing_square[data='0-1']").simulate('click');

      expect(wrapper.html()).toContain("circle");
      expect(wrapper.html()).toContain("cross");
    });

    it('No further moves can be made after game is won', () => {
      wrapper.find(".playing_square[data='0-0']").simulate('click'); // Player O goes

      wrapper.find(".playing_square[data='1-0']").simulate('click'); // Player X goes

      wrapper.find(".playing_square[data='1-1']").simulate('click'); // Player O goes

      wrapper.find(".playing_square[data='2-0']").simulate('click'); // Player X goes

      wrapper.find(".playing_square[data='2-2']").simulate('click'); // Player O wins

      wrapper.find(".playing_square[data='2-1']").simulate('click'); // Player X move is not drawn

      expect(count(wrapper.html(), /cross/g)).toEqual(2);
    });

    it('Board is cleared when New Game Button is pressed', () => {
      wrapper.find(".playing_square[data='0-0']").simulate('click'); // Player O goes

      expect(wrapper.html()).toContain("circle");

      wrapper.find(".btn__new_game").simulate('click');

      expect(wrapper.html()).not.toContain("circle");

      wrapper.find(".playing_square[data='0-0']").simulate('click'); // Player X goes
      expect(wrapper.html()).toContain("cross");

    });
  });
});
