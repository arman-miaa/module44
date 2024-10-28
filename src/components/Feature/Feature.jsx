import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

const Feature = ({ feature }) => {
  // console.log(feature);
  return (
      <div className="flex pl-8 space-y-4 items-center gap-2 text-3xl justify-start">
          <h4 className="text-green-500 mt-4"><FaCheckCircle></FaCheckCircle></h4>
          <h4>{feature}</h4>
          
    </div>
  );
};
Feature.propTypes = {
    feature:PropTypes.string
}

export default Feature;
