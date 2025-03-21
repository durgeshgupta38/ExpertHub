import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Container, Navbar } from "react-bootstrap";
import "./breadcum.css"
const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
    //   <Container >
        <Breadcrumb >
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} >
                Home
            </Breadcrumb.Item>

            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;

                return isLast ? (
                    <Breadcrumb.Item active key={to}>
                        {value}
                    </Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to }} key={to}>
                        {value}
                    </Breadcrumb.Item>
                );
            })}
        </Breadcrumb>
        
    // </Container >
    );
};

export default Breadcrumbs;
