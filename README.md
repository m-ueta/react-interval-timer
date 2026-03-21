# React Interval Timer

[![CI](https://github.com/m-ueta/react-interval-timer/actions/workflows/ci.yml/badge.svg)](https://github.com/m-ueta/react-interval-timer/actions/workflows/ci.yml)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/m-ueta/react-interval-timer/blob/master/LICENCE)

React Component Wrapper for setTimeout and setInterval.


```sh
npm install --save react-interval-timer
```


## Usage examples
```jsx
import { useState } from 'react';
import IntervalTimer from 'react-interval-timer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <IntervalTimer
                timeout={1000}
                callback={() => setCount(c => c + 1)}
                enabled={true}
                repeat={true}
            />
        </div>
    );
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
then open http://localhost:5173


## Options

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `timeout` | `number` | `1000` | Interval / timeout duration in milliseconds |
| `callback` | `func` | — | Function called on each tick |
| `enabled` | `bool` | `false` | Start or stop the timer |
| `repeat` | `bool` | `true` | `true` = setInterval, `false` = setTimeout |

> **Note:** Wrap `callback` in `useCallback` to prevent unnecessary timer restarts.

```jsx
const tick = useCallback(() => {
    // your logic
}, [/* dependencies */]);

<IntervalTimer timeout={1000} callback={tick} enabled={true} repeat={true} />
```

# License
MIT
