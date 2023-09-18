const Total = ({ parts }) => {
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);
  return (
    <div>Total exercises: {totalExercises}</div>
  );
};

export default Total; 