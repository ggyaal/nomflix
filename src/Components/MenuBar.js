import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const MenuBar = styled.ul`
    margin: 30px 0;
    display: flex;
`;

const Menu = styled.li`
    & span {
        background-color: ${props => props.select? "#c0392b": "transparent"};
        transition: background-color .5s;
    }
    text-align: center;
    border-radius: 20px;
    width: 100px;
    padding: 5px;
    margin-right: 10px;
    font-size: 17px;
    background-color: rgba(0, 0, 0, .5);
`;

export default withRouter(({ location: { pathname }}) => (
    <MenuBar>
        <Menu select={pathname === `/${pathname.split("/")[1]}/${pathname.split("/")[2]}/overview`}>
            <Link to={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}/overview`}>
                <span>OVERVIEW</span>
            </Link>
        </Menu>
        <Menu select={pathname === `/${pathname.split("/")[1]}/${pathname.split("/")[2]}/videos`}>
            <Link to={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}/videos`}>
                <span>ViDEOS</span>
            </Link>
        </Menu>
        <Menu select={pathname === `/${pathname.split("/")[1]}/${pathname.split("/")[2]}/actors`}>
            <Link to={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}/actors`}>
                <span>ACTORS</span>
            </Link>
        </Menu>
        {pathname.includes("movie")? null : (
            <Menu select={pathname === `/${pathname.split("/")[1]}/${pathname.split("/")[2]}/seasons`}>
                <Link to={`/${pathname.split("/")[1]}/${pathname.split("/")[2]}/seasons`}>
                    <span>SEASONS</span>
                </Link>
            </Menu>
        )}
    </MenuBar>
));