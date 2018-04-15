# React Interval Timer

[![Build Status](https://travis-ci.org/m-ueta/react-interval-timer.svg?branch=master)](https://travis-ci.org/m-ueta/react-interval-timer)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/m-ueta/react-interval-timer/blob/master/LICENCE)

React Wrapper for setInterval 


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
```

#### timeout
** Default: 1000 **
setTimeout setInterval time

#### callback
** Default: ()=> {return null} **
callback function

#### enabled
** Default: false **
Switch enabled or disabled

#### repeat
** default: true **
switch repeat (use setInterval) or only once (use setTimeout)
