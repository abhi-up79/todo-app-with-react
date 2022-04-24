import './App.css';
import React, {Component} from 'react';

// import FirstComponent from './components/learning-examples/FirstComponent';
// import SecondComponent from './components/learning-examples/SecondComponent';
// import ThirdComponent from './components/learning-examples/ThirdComponent';

import Counter from './components/counter/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}

// class LearningComponent extends Component {
//   render() {
//     return (
//       <div className="App">
//         <FirstComponent />
//         <SecondComponent> </SecondComponent>
//         <ThirdComponent/>
//       </div>
//     );
//   }
// }

export default App;
