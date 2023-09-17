import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";

const App = () => {
  return (
    <div>
      <Header title="Web Development Course" />
      <Content contents="Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. Its main focus is building single-page applications with ReactJS using REST APIs built with Node.js." />
      <Total partCount={4} totalExercise={10+20+30+40} />
    </div>
  );
}

export default App;

