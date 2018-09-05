import React from 'react';
import ReactDOM from 'react-dom';
import IntervalTimer from './IntervalTimer';
import { shallow } from 'enzyme';


jest.useFakeTimers();

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<IntervalTimer />, div);
});


test('change Interval to Timeout', () => {
    const props = {
        timeout: 1000,
        enabled: false,
        callback: jest.fn(),
        repeat: true
    };
    const wrapper = shallow(<IntervalTimer />);
    expect(props.callback).not.toBeCalled();
    wrapper.setProps({
        ...props,
        enabled: true
    });
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(2);

    wrapper.setProps({
        ...props,
        enabled: true,
        repeat: false
    });
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(3);
    jest.advanceTimersByTime(300000);
    expect(props.callback).toHaveBeenCalledTimes(3);

    wrapper.setProps({
        ...props,
        enabled: true,
        repeat: true
    });
    jest.advanceTimersByTime(20000);
    expect(props.callback).toHaveBeenCalledTimes(23);
});

test('change Timeout to Interval', () => {
    const props = {
        timeout: 1000,
        enabled: true,
        callback: jest.fn(),
        repeat: false
    };
    const wrapper = shallow(<IntervalTimer />);
    expect(props.callback).not.toBeCalled();
    wrapper.setProps({
        ...props,
    });
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(1);

    wrapper.setProps({
        ...props,
        repeat: true
    });
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(3);
});

test('change enabled in timeout', () => {
    const props = {
        timeout: 1000,
        enabled: true,
        callback: jest.fn(),
        repeat: false
    };
    const wrapper = shallow(<IntervalTimer />);
    expect(props.callback).not.toBeCalled();
    wrapper.setProps({
        ...props,
    });
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(1);

    wrapper.setProps({
        ...props,
        enabled: false
    });
    jest.advanceTimersByTime(10000);
    expect(props.callback).toHaveBeenCalledTimes(1);

    wrapper.setProps({
        ...props,
        enabled: true
    });
    jest.advanceTimersByTime(10000);
    expect(props.callback).toHaveBeenCalledTimes(2);

});

test('change enabled in interval', () => {
    const props = {
        timeout: 1000,
        enabled: true,
        callback: jest.fn(),
        repeat: true
    };
    const wrapper = shallow(<IntervalTimer />);
    expect(props.callback).not.toBeCalled();
    wrapper.setProps({
        ...props,
    });
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(props.callback).toHaveBeenCalledTimes(2);

    wrapper.setProps({
        ...props,
        enabled: false
    });
    jest.advanceTimersByTime(10000);
    expect(props.callback).toHaveBeenCalledTimes(2);


    wrapper.setProps({
        ...props,
        enabled: true
    });
    jest.advanceTimersByTime(10000);
    expect(props.callback).toHaveBeenCalledTimes(12);

});
