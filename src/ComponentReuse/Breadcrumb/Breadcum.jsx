import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Container } from "react-bootstrap";
import "./breadcum.css"

const Breadcrumbs = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <>
        {location.pathname !=="/" &&  <div className="breadcrumb-wrapper">
            <Container>
                {isLoggedIn && (
                    <Breadcrumb className="py-3 mb-0">
                        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
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
                )}
            </Container>
        </div>}
       
        </>
    );
};

export default Breadcrumbs;
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Breadcrumb, Container, Navbar } from "react-bootstrap";
// import "./breadcum.css"
// import { useAuth } from "../../ContextApi/AuthContext";
// const Breadcrumbs = () => {
// let isLoggedIn=localStorage.getItem("isLoggedIn")


//     const location = useLocation();
//     const pathnames = location.pathname.split("/").filter((x) => x);

//     return (<>
//         {isLoggedIn &&

//             <Breadcrumb >
//                 <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }} >
//                     Home
//                 </Breadcrumb.Item>

//                 {pathnames.map((value, index) => {
//                     const to = `/${pathnames.slice(0, index + 1).join("/")}`;
//                     const isLast = index === pathnames.length - 1;

//                     return isLast ? (
//                         <Breadcrumb.Item active key={to}>
//                             {value}
//                         </Breadcrumb.Item>
//                     ) : (
//                         <Breadcrumb.Item linkAs={Link} linkProps={{ to }} key={to}>
//                             {value}
//                         </Breadcrumb.Item>
//                     );
//                 })}
//             </Breadcrumb>
//         }
//     </>


//     );
// };

// export default Breadcrumbs;