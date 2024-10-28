import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const Price = ({ option }) => {
    const {name, price, features } = option;
    return (
      <div className="bg-blue-500 flex flex-col rounded-md p-4 text-white">
        <h2 className="text-center">
          <span className="text-7xl font-extrabold">{price}</span>
          <span className="text-2xl"> /mon</span>
        </h2>
        <h4 className="text-3xl text-center my-8">{name}</h4>

        <div className="flex-grow">
          {features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </div>
        <button className="btn my-12 rounded-xl font-bold bg-green-500 w-full hover:bg-green-700">Buy Now</button>
      </div>
    );
};

Price.propTypes = {
    option: PropTypes.object
}

export default Price;