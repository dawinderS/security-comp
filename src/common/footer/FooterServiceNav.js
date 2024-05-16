import React from 'react';
import { Link } from "react-router-dom";

const FooterServiceNav = ({data}) => {
    return (
        <>
            <li>
                <Link to={`/our-services/${data.id}`}>{data.title}</Link>
            </li>
        </>
    );
};

export default FooterServiceNav;