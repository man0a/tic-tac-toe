import '../polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;
global.React = React;
global.ReactDOM = ReactDOM;