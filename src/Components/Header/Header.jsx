import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link style={{ marginRight: '10px' }} to={'/'}>Home</Link>
            <Link to={'/login'}>Login</Link>
        </div>
    );
};

export default Header;