import GameSquare from "./GameSquare"

describe('Component: <GameSquare />', () => {
  it('renders component without crashing', () => {
    let wrapper = shallow(<GameSquare />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders component without crashing', () => {
    let mockFn = jest.fn();
    let wrapper = shallow(<GameSquare x={0} y={0} clickHandler={mockFn} />);

    expect(mockFn).not.toHaveBeenCalled();
    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});
