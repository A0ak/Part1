const Content = ({ parts }) => parts.map((part, index) => (
  <div key={index}>
    <h2>{part.name}</h2>
    <p>Exercises: {part.exercises}</p>
  </div>
));

export default Content;