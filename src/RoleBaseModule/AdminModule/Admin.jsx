import React from "react";

const Admin = () => {
    return (
        <div className="layout-fixed sidebar-expand-lg bg-body-tertiary">
            <div className="app-wrapper">
                <nav className="app-header navbar navbar-expand bg-body">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" data-lte-toggle="sidebar" href="#" role="button">
                                    <i className="bi bi-list"></i>
                                </a>
                            </li>
                            <li className="nav-item d-none d-md-block"><a href="#" className="nav-link">Home</a></li>
                            <li className="nav-item d-none d-md-block"><a href="#" className="nav-link">Contact</a></li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                                    <i className="bi bi-search"></i>
                                </a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" data-bs-toggle="dropdown" href="#">
                                    <i className="bi bi-chat-text"></i>
                                    <span className="navbar-badge badge text-bg-danger">3</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src="../../dist/assets/img/user1-128x128.jpg"
                                                    alt="User Avatar"
                                                    className="img-size-50 rounded-circle me-3"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="dropdown-item-title">
                                                    Brad Diesel
                                                    <span className="float-end fs-7 text-danger">
                                                        <i className="bi bi-star-fill"></i>
                                                    </span>
                                                </h3>
                                                <p className="fs-7">Call me whenever you can...</p>
                                                <p className="fs-7 text-secondary">
                                                    <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src="../../dist/assets/img/user8-128x128.jpg"
                                                    alt="User Avatar"
                                                    className="img-size-50 rounded-circle me-3"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="dropdown-item-title">
                                                    John Pierce
                                                    <span className="float-end fs-7 text-secondary">
                                                        <i className="bi bi-star-fill"></i>
                                                    </span>
                                                </h3>
                                                <p className="fs-7">I got your message bro</p>
                                                <p className="fs-7 text-secondary">
                                                    <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <img
                                                    src="../../dist/assets/img/user3-128x128.jpg"
                                                    alt="User Avatar"
                                                    className="img-size-50 rounded-circle me-3"
                                                />
                                            </div>
                                            <div className="flex-grow-1">
                                                <h3 className="dropdown-item-title">
                                                    Nora Silvester
                                                    <span className="float-end fs-7 text-warning">
                                                        <i className="bi bi-star-fill"></i>
                                                    </span>
                                                </h3>
                                                <p className="fs-7">The subject goes here</p>
                                                <p className="fs-7 text-secondary">
                                                    <i className="bi bi-clock-fill me-1"></i> 4 Hours Ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link" data-bs-toggle="dropdown" href="#">
                                    <i className="bi bi-bell-fill"></i>
                                    <span className="navbar-badge badge text-bg-warning">15</span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <span className="dropdown-item dropdown-header">15 Notifications</span>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <i className="bi bi-envelope me-2"></i> 4 new messages
                                        <span className="float-end text-secondary fs-7">3 mins</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <i className="bi bi-people-fill me-2"></i> 8 friend requests
                                        <span className="float-end text-secondary fs-7">12 hours</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item">
                                        <i className="bi bi-file-earmark-fill me-2"></i> 3 new reports
                                        <span className="float-end text-secondary fs-7">2 days</span>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a href="#" className="dropdown-item dropdown-footer"> See All Notifications </a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#" data-lte-toggle="fullscreen">
                                    <i data-lte-icon="maximize" className="bi bi-arrows-fullscreen"></i>
                                    <i data-lte-icon="minimize" className="bi bi-fullscreen-exit" style={{ display: 'none' }}></i>
                                </a>
                            </li>

                            <li className="nav-item dropdown user-menu">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                    <img
                                        src="../../dist/assets/img/user2-160x160.jpg"
                                        className="user-image rounded-circle shadow"
                                        alt="User Image"
                                    />
                                    <span className="d-none d-md-inline">Alexander Pierce</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                                    <li className="user-header text-bg-primary">
                                        <img
                                            src="../../dist/assets/img/user2-160x160.jpg"
                                            className="rounded-circle shadow"
                                            alt="User Image"
                                        />
                                        <p>
                                            Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2023</small>
                                        </p>
                                    </li>

                                    <li className="user-body">
                                        <div className="row">
                                            <div className="col-4 text-center"><a href="#">Followers</a></div>
                                            <div className="col-4 text-center"><a href="#">Sales</a></div>
                                            <div className="col-4 text-center"><a href="#">Friends</a></div>
                                        </div>
                                    </li>

                                    <li className="user-footer">
                                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        <a href="#" className="btn btn-default btn-flat float-end">Sign out</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <aside className="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
                    <div className="sidebar-brand">
                        <a href="./index.html" className="brand-link">
                            <img
                                src="../../dist/assets/img/AdminLTELogo.png"
                                alt="AdminLTE Logo"
                                className="brand-image opacity-75 shadow"
                            />
                            <span className="brand-text fw-light">AdminLTE 4</span>
                        </a>
                    </div>

                    <div className="sidebar-wrapper">
                        <nav className="mt-2">
                            <ul
                                className="nav sidebar-menu flex-column"
                                data-lte-toggle="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon bi bi-speedometer"></i>
                                        <p>
                                            Dashboard
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./index.html" className="nav-link active">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Dashboard v1</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index2.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Dashboard v2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./index3.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Dashboard v3</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="./generate/theme.html" className="nav-link">
                                        <i className="nav-icon bi bi-palette"></i>
                                        <p>Theme Generate</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-box-seam-fill"></i>
                                        <p>
                                            Widgets
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./widgets/small-box.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Small Box</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./widgets/info-box.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>info Box</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./widgets/cards.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Cards</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-clipboard-fill"></i>
                                        <p>
                                            Layout Options
                                            <span className="nav-badge badge text-bg-secondary me-3">6</span>
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./layout/unfixed-sidebar.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Default Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./layout/fixed-sidebar.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Fixed Sidebar</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./layout/layout-custom-area.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Layout <small>+ Custom Area </small></p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./layout/sidebar-mini.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Sidebar Mini</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./layout/collapsed-sidebar.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Sidebar Mini <small>+ Collapsed</small></p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./layout/logo-switch.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Sidebar Mini <small>+ Logo Switch</small></p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./layout/layout-rtl.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Layout RTL</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-tree-fill"></i>
                                        <p>
                                            UI Elements
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./UI/general.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>General</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./UI/icons.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Icons</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./UI/timeline.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Timeline</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-pencil-square"></i>
                                        <p>
                                            Forms
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./forms/general.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>General Elements</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-table"></i>
                                        <p>
                                            Tables
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./tables/simple.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Simple Tables</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-header">EXAMPLES</li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                        <p>
                                            Auth
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                                <p>
                                                    Version 1
                                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="./examples/login.html" className="nav-link">
                                                        <i className="nav-icon bi bi-circle"></i>
                                                        <p>Login</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="./examples/register.html" className="nav-link">
                                                        <i className="nav-icon bi bi-circle"></i>
                                                        <p>Register</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon bi bi-box-arrow-in-right"></i>
                                                <p>
                                                    Version 2
                                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="./examples/login-v2.html" className="nav-link">
                                                        <i className="nav-icon bi bi-circle"></i>
                                                        <p>Login</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="./examples/register-v2.html" className="nav-link">
                                                        <i className="nav-icon bi bi-circle"></i>
                                                        <p>Register</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./examples/lockscreen.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Lockscreen</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-header">DOCUMENTATIONS</li>
                                <li className="nav-item">
                                    <a href="./docs/introduction.html" className="nav-link">
                                        <i className="nav-icon bi bi-download"></i>
                                        <p>Installation</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./docs/layout.html" className="nav-link">
                                        <i className="nav-icon bi bi-grip-horizontal"></i>
                                        <p>Layout</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./docs/color-mode.html" className="nav-link">
                                        <i className="nav-icon bi bi-star-half"></i>
                                        <p>Color Mode</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-ui-checks-grid"></i>
                                        <p>
                                            Components
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./docs/components/main-header.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Main Header</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="./docs/components/main-sidebar.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Main Sidebar</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-filetype-js"></i>
                                        <p>
                                            Javascript
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="./docs/javascript/treeview.html" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Treeview</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="./docs/browser-support.html" className="nav-link">
                                        <i className="nav-icon bi bi-browser-edge"></i>
                                        <p>Browser Support</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./docs/how-to-contribute.html" className="nav-link">
                                        <i className="nav-icon bi bi-hand-thumbs-up-fill"></i>
                                        <p>How To Contribute</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./docs/faq.html" className="nav-link">
                                        <i className="nav-icon bi bi-question-circle-fill"></i>
                                        <p>FAQ</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="./docs/license.html" className="nav-link">
                                        <i className="nav-icon bi bi-patch-check-fill"></i>
                                        <p>License</p>
                                    </a>
                                </li>
                                <li className="nav-header">MULTI LEVEL EXAMPLE</li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-circle-fill"></i>
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-circle-fill"></i>
                                        <p>
                                            Level 1
                                            <i className="nav-arrow bi bi-chevron-right"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>
                                                    Level 2
                                                    <i className="nav-arrow bi bi-chevron-right"></i>
                                                </p>
                                            </a>
                                            <ul className="nav nav-treeview">
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="nav-icon bi bi-record-circle-fill"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="nav-icon bi bi-record-circle-fill"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a href="#" className="nav-link">
                                                        <i className="nav-icon bi bi-record-circle-fill"></i>
                                                        <p>Level 3</p>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                <i className="nav-icon bi bi-circle"></i>
                                                <p>Level 2</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-circle-fill"></i>
                                        <p>Level 1</p>
                                    </a>
                                </li>
                                <li className="nav-header">LABELS</li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-circle text-danger"></i>
                                        <p className="text">Important</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-circle text-warning"></i>
                                        <p>Warning</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon bi bi-circle text-info"></i>
                                        <p>Informational</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <main className="app-main">
                    <div className="app-content-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6"><h3 className="mb-0">Dashboard</h3></div>
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-end">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="app-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-3 col-6">
                                    <div className="small-box text-bg-primary">
                                        <div className="inner">
                                            <h3>150</h3>
                                            <p>New Orders</p>
                                        </div>
                                        <svg
                                            className="small-box-icon"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
                                            ></path>
                                        </svg>
                                        <a
                                            href="#"
                                            className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
                                        >
                                            More info <i className="bi bi-link-45deg"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box text-bg-success">
                                        <div className="inner">
                                            <h3>53<sup className="fs-5">%</sup></h3>
                                            <p>Bounce Rate</p>
                                        </div>
                                        <svg
                                            className="small-box-icon"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"
                                            ></path>
                                        </svg>
                                        <a
                                            href="#"
                                            className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
                                        >
                                            More info <i className="bi bi-link-45deg"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box text-bg-warning">
                                        <div className="inner">
                                            <h3>44</h3>
                                            <p>User Registrations</p>
                                        </div>
                                        <svg
                                            className="small-box-icon"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"
                                            ></path>
                                        </svg>
                                        <a
                                            href="#"
                                            className="small-box-footer link-dark link-underline-opacity-0 link-underline-opacity-50-hover"
                                        >
                                            More info <i className="bi bi-link-45deg"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="small-box text-bg-danger">
                                        <div className="inner">
                                            <h3>65</h3>
                                            <p>Unique Visitors</p>
                                        </div>
                                        <svg
                                            className="small-box-icon"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                                            ></path>
                                            <path
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                                d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                                            ></path>
                                        </svg>
                                        <a
                                            href="#"
                                            className="small-box-footer link-light link-underline-opacity-0 link-underline-opacity-50-hover"
                                        >
                                            More info <i className="bi bi-link-45deg"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-7 connectedSortable">
                                    <div className="card mb-4">
                                        <div className="card-header"><h3 className="card-title">Sales Value</h3></div>
                                        <div className="card-body"><div id="revenue-chart"></div></div>
                                    </div>

                                    <div className="card direct-chat direct-chat-primary mb-4">
                                        <div className="card-header">
                                            <h3 className="card-title">Direct Chat</h3>
                                            <div className="card-tools">
                                                <span title="3 New Messages" className="badge text-bg-primary"> 3 </span>
                                                <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                                                    <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                                                    <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-tool"
                                                    title="Contacts"
                                                    data-lte-toggle="chat-pane"
                                                >
                                                    <i className="bi bi-chat-text-fill"></i>
                                                </button>
                                                <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="direct-chat-messages">
                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-start"> Alexander Pierce </span>
                                                        <span className="direct-chat-timestamp float-end"> 23 Jan 2:00 pm </span>
                                                    </div>
                                                    <img
                                                        className="direct-chat-img"
                                                        src="../../dist/assets/img/user1-128x128.jpg"
                                                        alt="message user image"
                                                    />
                                                    <div className="direct-chat-text">
                                                        Is this template really for free? That's unbelievable!
                                                    </div>
                                                </div>

                                                <div className="direct-chat-msg end">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-end"> Sarah Bullock </span>
                                                        <span className="direct-chat-timestamp float-start"> 23 Jan 2:05 pm </span>
                                                    </div>
                                                    <img
                                                        className="direct-chat-img"
                                                        src="../../dist/assets/img/user3-128x128.jpg"
                                                        alt="message user image"
                                                    />
                                                    <div className="direct-chat-text">You better believe it!</div>
                                                </div>

                                                <div className="direct-chat-msg">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-start"> Alexander Pierce </span>
                                                        <span className="direct-chat-timestamp float-end"> 23 Jan 5:37 pm </span>
                                                    </div>
                                                    <img
                                                        className="direct-chat-img"
                                                        src="../../dist/assets/img/user1-128x128.jpg"
                                                        alt="message user image"
                                                    />
                                                    <div className="direct-chat-text">
                                                        Working with AdminLTE on a great new app! Wanna join?
                                                    </div>
                                                </div>

                                                <div className="direct-chat-msg end">
                                                    <div className="direct-chat-infos clearfix">
                                                        <span className="direct-chat-name float-end"> Sarah Bullock </span>
                                                        <span className="direct-chat-timestamp float-start"> 23 Jan 6:10 pm </span>
                                                    </div>
                                                    <img
                                                        className="direct-chat-img"
                                                        src="../../dist/assets/img/user3-128x128.jpg"
                                                        alt="message user image"
                                                    />
                                                    <div className="direct-chat-text">I would love to.</div>
                                                </div>
                                            </div>

                                            <div className="direct-chat-contacts">
                                                <ul className="contacts-list">
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                className="contacts-list-img"
                                                                src="../../dist/assets/img/user1-128x128.jpg"
                                                                alt="User Avatar"
                                                            />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Count Dracula
                                                                    <small className="contacts-list-date float-end"> 2/28/2023 </small>
                                                                </span>
                                                                <span className="contacts-list-msg"> How have you been? I was... </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                className="contacts-list-img"
                                                                src="../../dist/assets/img/user7-128x128.jpg"
                                                                alt="User Avatar"
                                                            />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Sarah Doe
                                                                    <small className="contacts-list-date float-end"> 2/23/2023 </small>
                                                                </span>
                                                                <span className="contacts-list-msg"> I will be waiting for... </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                className="contacts-list-img"
                                                                src="../../dist/assets/img/user3-128x128.jpg"
                                                                alt="User Avatar"
                                                            />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Nadia Jolie
                                                                    <small className="contacts-list-date float-end"> 2/20/2023 </small>
                                                                </span>
                                                                <span className="contacts-list-msg"> I'll call you back at... </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                className="contacts-list-img"
                                                                src="../../dist/assets/img/user5-128x128.jpg"
                                                                alt="User Avatar"
                                                            />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Nora S. Vans
                                                                    <small className="contacts-list-date float-end"> 2/10/2023 </small>
                                                                </span>
                                                                <span className="contacts-list-msg"> Where is your new... </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                className="contacts-list-img"
                                                                src="../../dist/assets/img/user6-128x128.jpg"
                                                                alt="User Avatar"
                                                            />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    John K.
                                                                    <small className="contacts-list-date float-end"> 1/27/2023 </small>
                                                                </span>
                                                                <span className="contacts-list-msg"> Can I take a look at... </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <img
                                                                className="contacts-list-img"
                                                                src="../../dist/assets/img/user8-128x128.jpg"
                                                                alt="User Avatar"
                                                            />
                                                            <div className="contacts-list-info">
                                                                <span className="contacts-list-name">
                                                                    Kenneth M.
                                                                    <small className="contacts-list-date float-end"> 1/4/2023 </small>
                                                                </span>
                                                                <span className="contacts-list-msg"> Never mind I found... </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <form action="#" method="post">
                                                <div className="input-group">
                                                    <input
                                                        type="text"
                                                        name="message"
                                                        placeholder="Type Message ..."
                                                        className="form-control"
                                                    />
                                                    <span className="input-group-append">
                                                        <button type="button" className="btn btn-primary">Send</button>
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 connectedSortable">
                                    <div className="card text-white bg-primary bg-gradient border-primary mb-4">
                                        <div className="card-header border-0">
                                            <h3 className="card-title">Sales Value</h3>
                                            <div className="card-tools">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm"
                                                    data-lte-toggle="card-collapse"
                                                >
                                                    <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                                                    <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="card-body"><div id="world-map" style={{ height: '220px' }}></div></div>
                                        <div className="card-footer border-0">
                                            <div className="row">
                                                <div className="col-4 text-center">
                                                    <div id="sparkline-1" className="text-dark"></div>
                                                    <div className="text-white">Visitors</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <div id="sparkline-2" className="text-dark"></div>
                                                    <div className="text-white">Online</div>
                                                </div>
                                                <div className="col-4 text-center">
                                                    <div id="sparkline-3" className="text-dark"></div>
                                                    <div className="text-white">Sales</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="app-footer">
                    <div className="float-end d-none d-sm-inline">Anything you want</div>

                    <strong>
                        Copyright &copy; 2014-2024&nbsp;
                        <a href="https://adminlte.io" className="text-decoration-none">AdminLTE.io</a>.
                    </strong>
                    All rights reserved.
                </footer>
            </div>
        </div>
    );
};

export default Admin;