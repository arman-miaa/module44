

const Link = ({ route }) => {
    console.log(route);
    return (
        <div>
            <li className="mr-8"><a href={route.path}>{ route.name}</a></li>
        </div>
    );
};

export default Link;