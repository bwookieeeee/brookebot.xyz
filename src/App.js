import './stylesheets/App.css';
import LoginList from './components/LoginList';
import Header from "./components/Header"

const testUser = {
  cacheId: "0000-000-0000-00000000000000",
  cacheTime: Date.now(),
  hardwareConcurrency: 69,
  height: 420,
  internalUsernameBanned: false,
  internalIpBanned: false,
  ip: "69.69.69.69",
  renderer: "ur mum",
  userAgent: "they took my fucking eyes",
  username: "testUser",
  width: 420
}

function App() {
  return (
    <div className="App">
      <Header />
      <LoginList />
    </div>
  );
}

export default App;
