
import './App.css';
import {Switch, Route} from 'react-router-dom';
import ChatPage from './Components/Pages/ChatPage';
import HomePage from './Components/Pages/HomePage';
function App() {
  return (
    <div className="App">
  <Switch>
    <Route  path="/" exact>
      <HomePage />
    </Route>
    <Route  path="/chats">
      <ChatPage />
    </Route>
  </Switch>
    </div>
  );
}

export default App;
