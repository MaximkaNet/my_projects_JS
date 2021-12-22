import logo from './logo.svg';
import './App.css';
import Answear from './components/Answear/Answear';
import Flexbox from './components/Flexbox/Flexbox';
import GetTime from './components/GetTime/GetTime';
import GetPosts from './components/GetPosts/GetPosts';
import ajaxUtils from './utils/ajax-utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Flexbox>
          <Answear a='3' b='4' />
          <Answear a='3' b='4' />
        </Flexbox>
        <GetTime />
        <GetPosts items={ajaxUtils.getPosts}/>
      </header>
    </div>
  );
}

export default App;
