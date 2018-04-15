import React from 'react';
import PropTypes from 'prop-types';


class IntervalTimer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.repeat) {
            this.initializeInterval(this.props.callback,this.props.timeout);

        } else {
            this.initializeTimeout(this.props.callback,this.props.timeout);
        }
    }


    componentWillReceiveProps(nextProps) {
        if (!nextProps.enabled) {
            this.resetInterval();
            this.resetTimeout();
        } else {
            if (this.props.enabled !== nextProps.enabled
                || this.props.repeat !== nextProps.repeat
                || this.props.timeout !== nextProps.timeout
                || this.props.callback !== nextProps.callback) {
                if (nextProps.repeat) {
                    this.initializeInterval(nextProps.callback,nextProps.timeout);
                } else {
                    this.initializeTimeout(nextProps.callback,nextProps.timeout);
                }
            }
        }
    }


    initializeInterval = (callback,timeout) => {
        this.resetTimeout();
        this.resetInterval();
        this.interval = setInterval(callback, timeout);
    };

    initializeTimeout = (callback,timeout) => {
        this.resetTimeout();
        this.resetInterval();
        this.timeout = setTimeout(callback, timeout);
    };

    resetInterval = () => {
        if (this.interval) {
            clearInterval(this.interval)
        }
    };

    resetTimeout = () => {
        if (this.timeout) {
            clearTimeout(this.timeout)
        }
    };


    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };

    render() {
        return (
            null
        )
    }
}

IntervalTimer.propTypes = {
    timeout: PropTypes.number,
    enabled: PropTypes.bool,
    callback: PropTypes.func,
    repeat: PropTypes.bool
};

IntervalTimer.defaultProps = {
    timeout: 1000,
    enabled: false,
    callback: () => {
        console.log("You need to set your callback function for IntervalTimer")
    },
    repeat: true
};

export default IntervalTimer;