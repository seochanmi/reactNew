import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          리액트 프로젝트 입니다
        </p>
        <a
          className="App-link"
          href="https://github.com/seochanmi/reactNew"
          target="_blank"
          rel="noopener noreferrer"
        >
          레포지토리 가기
        </a>
      </header>
    </div>
  );
}

export default App;
