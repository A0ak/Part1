import Header from "./components/Header";
import Content from "./components/Content";
import Total from "./components/Total";


const App = () => {

  const parts = [
    {
      name: 'Part 1', 
      exercises: 10
    }, 
    {
      name: 'Part 2', 
      exercises: 20
    }, 
    {
      name: 'Part 3', 
      exercises: 30
    },
  ];
  return (
    <div>
      <Header title="Web Development Course" />
      <Content parts={parts} />
      <Total partCount={3} totalExercise={10+20+30} />
    </div>
  );
}

export default App;


