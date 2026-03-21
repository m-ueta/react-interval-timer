import { render, act } from '@testing-library/react';
import IntervalTimer from './IntervalTimer';

jest.useFakeTimers();

afterEach(() => {
    jest.clearAllTimers();
});

test('renders without crashing', () => {
    render(<IntervalTimer />);
});

test('change Interval to Timeout', () => {
    const callback = jest.fn();
    const baseProps = {
        timeout: 1000,
        enabled: false,
        callback,
        repeat: true,
    };
    const { rerender } = render(<IntervalTimer {...baseProps} />);

    expect(callback).not.toBeCalled();

    rerender(<IntervalTimer {...baseProps} enabled={true} />);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(1);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(2);

    rerender(<IntervalTimer {...baseProps} enabled={true} repeat={false} />);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(3);
    act(() => { jest.advanceTimersByTime(300000); });
    expect(callback).toHaveBeenCalledTimes(3);

    rerender(<IntervalTimer {...baseProps} enabled={true} repeat={true} />);
    act(() => { jest.advanceTimersByTime(20000); });
    expect(callback).toHaveBeenCalledTimes(23);
});

test('change Timeout to Interval', () => {
    const callback = jest.fn();
    const baseProps = {
        timeout: 1000,
        enabled: true,
        callback,
        repeat: false,
    };
    const { rerender } = render(<IntervalTimer {...baseProps} />);

    expect(callback).not.toBeCalled();

    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(1);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(1);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(1);

    rerender(<IntervalTimer {...baseProps} repeat={true} />);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(2);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(3);
});

test('change enabled in timeout', () => {
    const callback = jest.fn();
    const baseProps = {
        timeout: 1000,
        enabled: true,
        callback,
        repeat: false,
    };
    const { rerender } = render(<IntervalTimer {...baseProps} />);

    expect(callback).not.toBeCalled();

    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(1);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(1);

    rerender(<IntervalTimer {...baseProps} enabled={false} />);
    act(() => { jest.advanceTimersByTime(10000); });
    expect(callback).toHaveBeenCalledTimes(1);

    rerender(<IntervalTimer {...baseProps} enabled={true} />);
    act(() => { jest.advanceTimersByTime(10000); });
    expect(callback).toHaveBeenCalledTimes(2);
});

test('change enabled in interval', () => {
    const callback = jest.fn();
    const baseProps = {
        timeout: 1000,
        enabled: true,
        callback,
        repeat: true,
    };
    const { rerender } = render(<IntervalTimer {...baseProps} />);

    expect(callback).not.toBeCalled();

    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(1);
    act(() => { jest.advanceTimersByTime(1000); });
    expect(callback).toHaveBeenCalledTimes(2);

    rerender(<IntervalTimer {...baseProps} enabled={false} />);
    act(() => { jest.advanceTimersByTime(10000); });
    expect(callback).toHaveBeenCalledTimes(2);

    rerender(<IntervalTimer {...baseProps} enabled={true} />);
    act(() => { jest.advanceTimersByTime(10000); });
    expect(callback).toHaveBeenCalledTimes(12);
});
