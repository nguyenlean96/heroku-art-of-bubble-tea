import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import { KF_TEA_LIST } from '../src/constants';
import { shuffleArray } from '../src/utils';
import { useReducer } from 'react';
function App() {
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  return (
    <MDBContainer>
      <MDBRow className='p-3'>
        <MDBCol>
          <h1>Kung Fu tea</h1>
        </MDBCol>
        <MDBCol>
          <MDBBtn onClick={forceUpdate}>Reset list</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <ol>
            {shuffleArray(KF_TEA_LIST).map((tea) => (
              <li key={tea.toUpperCase()}>{tea}</li>
            ))}
          </ol>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
