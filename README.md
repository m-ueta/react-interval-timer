# React Interval Timer

[![Build Status](https://travis-ci.org/m-ueta/react-interval-timer.svg?branch=master)](https://travis-ci.org/m-ueta/react-interval-timer)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/m-ueta/react-interval-timer/blob/master/LICENCE)

React Component Wrapper for setTimeout and setInterval.


```sh
npm install --save react-interval-timer
```


## Usage examples
```js
import IntervalTimer from 'react-interval-timer';

class App extends React.Component {

    render() {
        return (
            <div>
                <IntervalTimer
                    timeout={1000}
                    callback={()=>{console.log("Your function")}}
                    enabled={true}
                    repeat={true}
                />
            </div>
        )
    }
}

export default App;
```

## Run the example app
```sh
git clone https://github.com/m-ueta/react-interval-timer.git
cd react-interval-timer
npm install
npm start
```
then open http://localhost:3000


## Options

### Props
```js
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
        console.log("You need set your callback function for IntervalTimer")
    },
    repeat: true
};
```

#### timeout
setTimeout setInterval time

#### callback
callback function

#### enabled
Switch timer  enable or disable

#### repeat
switch using setInterval or setTimeout



# License
MIT
