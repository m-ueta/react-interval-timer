import { useState, useCallback } from 'react';
import IntervalTimer from "../../src";
import './demo.css';

function App() {
    const [callbackType, setCallbackType] = useState('increment');
    const [enabled, setEnabled] = useState(true);
    const [repeat, setRepeat] = useState(true);
    const [count, setCount] = useState(0);

    const increment = useCallback(() => setCount(c => c + 1), []);
    const decrement = useCallback(() => setCount(c => c - 1), []);
    const callback = callbackType === 'increment' ? increment : decrement;

    return (
        <div className="demo">
            <h2>IntervalTimer demo</h2>

            <div className="form">
                <form>
                    <label>
                        callback<br />
                        <input
                            type="radio"
                            name="callbackType"
                            value="increment"
                            onChange={() => setCallbackType('increment')}
                            checked={callbackType === 'increment'}
                        />
                        INCREMENT
                        <input
                            type="radio"
                            name="callbackType"
                            value="decrement"
                            onChange={() => setCallbackType('decrement')}
                            checked={callbackType === 'decrement'}
                        />
                        DECREMENT
                    </label>
                </form>
                <form>
                    <label>
                        type<br />
                        <input
                            type="radio"
                            name="repeat"
                            value="interval"
                            onChange={() => setRepeat(true)}
                            checked={repeat}
                        />
                        interval
                        <input
                            type="radio"
                            name="repeat"
                            value="timeout"
                            onChange={() => setRepeat(false)}
                            checked={!repeat}
                        />
                        timeout
                    </label>
                </form>

                <button onClick={() => setEnabled(true)}>enable</button>
                <button onClick={() => { setCount(0); setEnabled(false); }}>disable</button>
            </div>

            <div className={enabled ? "enable" : "disable"}>
                <table>
                    <tbody>
                        <tr>
                            <th>timeout</th>
                            <td>1000</td>
                        </tr>
                        <tr>
                            <th>callback</th>
                            <td>{callbackType}</td>
                        </tr>
                        <tr>
                            <th>enabled</th>
                            <td>{enabled ? "true" : "false"}</td>
                        </tr>
                        <tr>
                            <th>repeat</th>
                            <td>{repeat ? "true(setInterval)" : "false(setTimeout)"}</td>
                        </tr>
                    </tbody>
                </table>
                <p>{count}</p>
            </div>

            <IntervalTimer
                timeout={1000}
                callback={callback}
                enabled={enabled}
                repeat={repeat}
            />
        </div>
    );
}

export default App;
