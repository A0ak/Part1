import PropTypes from "prop-types";

const Content = (props) => {
  return <p>Course Content: {props.contents}</p>;
}

Content.propTypes = {
  contents: PropTypes.string.isRequired
}

export default Content;