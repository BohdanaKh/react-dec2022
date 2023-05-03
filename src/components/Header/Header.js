import {useNavigate} from "react-router-dom";

import css from './Header.module.css'
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <button onClick={()=>navigate('users')}>Users</button>
            <button onClick={()=>navigate('comments')}>Comments</button>
            <button onClick={()=>navigate('cars')}>Cars</button>
        </div>
    );
};

export {Header};