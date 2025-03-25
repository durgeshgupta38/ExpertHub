import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Container, Navbar } from "react-bootstrap";
import "./breadcum.css"
import { useAuth } from "../../ContextApi/AuthContext";
const Breadcrumbs = () => {
let isLoggedIn=localStorage.getItem("isLoggedIn")


    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (<>
        {isLoggedIn &&

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
        }
    </>


    );
};

export default Breadcrumbs;
