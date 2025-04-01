import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";
import "./breadcum.css"

const Breadcrumbs = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("role");

    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    
    return (
        <>
        {(location.pathname !=="/" && location.pathname !== `/${role}`) &&  <div className="breadcrumb-wrapper">
            <Container>
                {isLoggedIn && (
                    <Breadcrumb className="py-3 mb-0">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                            Home
                        </Breadcrumb.Item>
                        
                        {pathnames.map((value, index) => {
                            let to = `/${pathnames.slice(0, index + 1).join("/")}`;
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
                )}
            </Container>
        </div>}
       
        </>
    );
};

export default Breadcrumbs;
