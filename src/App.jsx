
import logo from '../public/images/brand_logo.png'


function App() {
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul>
          <li>Menu </li>
          <li>Location </li>
          <li>About </li>
          <li>Contact </li>
        </ul>
<button>Login</button>
      </nav>
    </div>
  );
}

export default App;
