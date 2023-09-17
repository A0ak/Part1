import Header from './components/Header';
import Content from './components/Content';
import Total from './components/Total';

const App = () => {
  return (
    <div>
      <Header course="dear trainee" />
      <Content contents="React, Redux, Node.js, MongoDB, GraphQL and TypeScript" />
      <Total total="We wish you luck" />
    </div>
  )
}

export default App;


