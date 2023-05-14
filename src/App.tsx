import { Fragment } from 'react';
import { KF_TEA_LIST } from '../src/constants';
import { shuffleArray } from '../src/utils';
function App() {
  return (
    <Fragment>
      <h1>Kung Fu tea</h1>
      <ol>
        {shuffleArray(KF_TEA_LIST).map((tea) => (
          <li key={tea.toUpperCase()}>{tea}</li>
        ))}
      </ol>
    </Fragment>
  );
}

export default App;
