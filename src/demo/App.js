import React from 'react';
import IntervalTimer from "../lib/components/IntervalTimer";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            callback: this.callback1,
            enabled: true,
            timeout: 1000,
            repeat: true,
            count: 0
        }
    }


    callback1 = () => {
        const {count} = this.state;
        this.setState({count: count + 1});
    };

    callback2 = () => {
        const {count} = this.state;
        this.setState({count: count - 1});
    };

    render() {

        return (
            <div className={"demo"}>
                <h2>IntervalTimer demo</h2>

                <form>
                    <label>
                        callback<br/>
                        <input type="radio" name="callback1" value="increment" onChange={() => {
                            this.setState({
                                callback: this.callback1
                            })
                        }}
                               checked={this.state.callback === this.callback1}
                        />
                        INCREMENT
                        <input type="radio" name="callback2" value="decrement" onChange={() => {
                            this.setState({
                                callback: this.callback2
                            })
                        }}
                               checked={this.state.callback === this.callback2}/>
                        DECREMENT
                    </label>
                </form>
                <form>
                    <label>
                        type<br/>
                        <input type="radio" name="interval" value={true} onChange={() => {
                            this.setState({
                                repeat: true
                            })
                        }} checked={this.state.repeat}/>
                        interval
                        <input type="radio" name="timeout" value={false}
                               onChange={() => {
                                   this.setState({
                                       repeat: false
                                   })
                               }}
                               checked={!this.state.repeat}/>
                        timeout
                    </label>
                </form>

                <button onClick={()=>{
                    this.setState({
                        enabled: true
                    })
                }}>enable</button>
                <button onClick={()=>{
                    this.setState({
                        count : 0,
                        enabled: false
                    })
                }}>disable</button>

                <p>{this.state.enabled ? this.state.count : "disabled"}</p>

                <IntervalTimer
                    timeout={this.state.timeout}
                    callback={this.state.callback}
                    enabled={this.state.enabled}
                    repeat={this.state.repeat}
                />
            </div>
        )
    }
}

export default App;
