import { NavLink } from "react-router-dom";


const Headers = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signUp'>SingnUp</NavLink>
        </div>
    );
};

export default Headers;