import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends Component{
  render(){
    return (
      <div>
        Search: <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
