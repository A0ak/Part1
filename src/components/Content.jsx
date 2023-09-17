import Part from './Part';

const Content = (props) => {

  return (
    <div>
      {props.parts.map((part, index) => 
        <Part key={index} partName={part.name} exerciseCount={part.exercises}/>
      )}
    </div>
  );
}

export default Content;