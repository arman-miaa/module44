import PropTypes from "prop-types";

const Link = ({ route }) => {
  // console.log(route);
  return (
      <div>
          
      <li className="mr-8 hover:bg-yellow-600 px-4">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
}

export default Link;
