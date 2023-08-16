import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLinkTwo = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to)
    let match = useMatch({ path: resolved.pathname, end: true })
    return (
        <div>
            <Link style={{ color: match ? '#fff' : '#fff', background: match ? '#4d93e9' : '#4f4f4f' }} to={to} {...props}>
                {children}
            </Link>
        </div>
    )
};

export default CustomLinkTwo;