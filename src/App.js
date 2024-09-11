import "./layout.css";
import Greeting from './greeting';

function App() {
  const name = "Cicero"
  return (
    <div class="container">
        <div class="section section1">
          <Greeting name = "Jason Deligero" age = "13" location = "BGC" />
        </div>
        <div class="section section2">
        <Greeting name = "Rafael Legaspi" age = "50" location = "Boracay" />
        </div>
        <div class="section section3">
        <Greeting name = "Kyline Cadiao" age = "70" location = "New Zealand" />
        </div>
    </div>
  );
}

export default App;
