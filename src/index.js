import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';

class App extends React.Component {
    // es7 静态属性
    static propTypes = {
        name: PropTypes.number
    }
    static defaultProps = {
        name: 1024
    }
    render () {
        return (<div>
            <h3>welcome to react</h3>
            <p>{this.props.name}</p>
        </div>)
    }
}

// App.propTypes = {
//     name: PropTypes.number
// };

// App.defaultProps = {
//     name: 1024
// }

ReactDOM.render(<App name={'hello'} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
