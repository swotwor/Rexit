import style from './App.module.scss';
import Header from './components/header/Header';
import Home from './pages/home/Home';

function App() {
    return (
      <main className={style.wrapper}>
        <Header />
        <Home />
      </main>
    );
}

export default App;
