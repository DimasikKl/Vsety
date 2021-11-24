import './App.css';
import Header from "./components/heder/heder";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/content/Content";

function App() {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <Content/>
    </div>
)
}

export default App;
