import './App.css';

function App() {
  return (
    <>
      <header>
        <a href="/">
          <img
            src="src/assets/btc.svg"
            alt="coin tracker brand logo hehe haha"
          />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Cryptocurrencies</a>
            </li>
            <li>
              <a href="">My Portfolio</a>
              {/* If user not login, display please sign in notification etc */}
            </li>
          </ul>
        </nav>
        <button>Sign In</button>
        <button>Sign Up</button>
      </header>
      <main>
        {/* Search Features */}
        {/* List of coins with pagination */}
      </main>
      <footer>
        <p>CoinTracker @2024</p>
        <p>
          Credits due to <a href="https://docs.coincap.io">CoinCap API 2.0</a>{' '}
          for making this RESTful API free and publicly available
        </p>
      </footer>
    </>
  );
}

export default App;
