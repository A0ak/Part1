import PropTypes from "prop-types";

const Total = (props) => {
  return <p>Our course consists of 14 sections in total. {props.total}!</p>;
}

Total.propTypes = {
  total: PropTypes.string.isRequired
}

export default Total;


