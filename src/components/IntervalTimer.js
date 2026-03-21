import { useEffect } from 'react';
import PropTypes from 'prop-types';

function IntervalTimer({ timeout, enabled, callback, repeat }) {
    useEffect(() => {
        if (!enabled) {
            return;
        }

        let timerId;
        if (repeat) {
            timerId = setInterval(callback, timeout);
        } else {
            timerId = setTimeout(callback, timeout);
        }

        return () => {
            if (repeat) {
                clearInterval(timerId);
            } else {
                clearTimeout(timerId);
            }
        };
    }, [enabled, repeat, timeout, callback]);

    return null;
}

IntervalTimer.propTypes = {
    timeout: PropTypes.number,
    enabled: PropTypes.bool,
    callback: PropTypes.func,
    repeat: PropTypes.bool,
};

IntervalTimer.defaultProps = {
    timeout: 1000,
    enabled: false,
    callback: () => {
        console.log('You need to set your callback function for IntervalTimer');
    },
    repeat: true,
};

export default IntervalTimer;
