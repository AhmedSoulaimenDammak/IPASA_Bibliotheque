import React, {Suspense, lazy} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {
    CFooter,
    CSidebarBrand,
    CSidebarToggler,
    CHeader,
    CSidebar,
    CSidebarNav,
    CContainer,
} from '@coreui/react';
import PropTypes from 'prop-types';
import navigation from '../../config/navbarConfig';
import ProgressBar from '../../../shared/progress-bar/ProgressBar';
import routes from '../../routes';
import {loggedConstant, Routes, Tokens} from "../../../constants";
import {checkExistingRoute} from "../../../shared/sharedMethod";
import {useDispatch, useSelector} from "react-redux";
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { AppSidebarNav } from './AppSidebarNav';

const Footer = lazy(() => import('./Footer'));
const Header = lazy(() => import('./Header'));

const MemberLayout = (props) => {
    const {appName, appLogo, member, location} = props;

    return (
        <div>
            {renderAppSidebar(props)}
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                {renderAppHeader(props, appName, appLogo, member)}
                <div className="body flex-grow-1 p-3 ">
                    {renderMainSection(location)}
                </div>
                {renderAppFooter(appName)}
            </div>
        </div>
    );
};

const renderAppHeader = (props, appName, appLogo, member) => {
    const signOut = (e) => {
        e.preventDefault();
        props.history.push(Routes.MEMBER_HOME);
        localStorage.removeItem('member');
        localStorage.removeItem(Tokens.MEMBER);
        localStorage.setItem(loggedConstant.IS_MEMBER_LOGOUT, 'true');
    };
    return (
        <CHeader position="sticky" className="mb-4 bg-light">
            <CContainer fluid>
            <Suspense fallback={<ProgressBar/>}>
                <Header history={props.history} appName={appName} member={member} appLogo={appLogo}
                        onLogout={e => signOut(e)}/>
            </Suspense>
            </CContainer>
        </CHeader>
    );
};

const onGoHomePage = () => {
    window.location.href = '#/app/landing';
};

const renderAppSidebar = (props) => {
    const { appName, appLogo} = props;
    const dispatch = useDispatch()
    const unfoldable = useSelector((state) => state.sidebarReducer.sidebarUnfoldable)
    const sidebarShow = useSelector((state) => state.sidebarReducer.sidebarShow)
    const show = useSelector(state => state.sidebarReducer.sidebarShow)
    return (
            <CSidebar position="fixed" unfoldable={unfoldable}
                visible={sidebarShow}
                onVisibleChange={(visible) => {
                    dispatch({ type: 'SET', sidebarShow: visible })
                }}>
                <CSidebarBrand className="d-none d-md-flex cursor-pointer" to="#/app/landing" onClick={() => onGoHomePage()}>
                    <img className="header__app-logo sidebar-brand-full" src={appLogo} alt={appLogo}/>
                    <span className="ml-2 header__app-name sidebar-brand-full">{appName}</span>
                    <img className="header__app-logo sidebar-brand-narrow" src={appLogo} alt={appLogo}/>
                </CSidebarBrand>

                <CSidebarNav>
                    <SimpleBar>
                        <AppSidebarNav items={navigation}/>
                    </SimpleBar>
                </CSidebarNav>
                <CSidebarToggler
                    className="d-none d-lg-flex"
                    onClick={() => dispatch({ type: 'SET', sidebarUnfoldable: !unfoldable })}
                />
            </CSidebar>
    );
};

const renderMainSection = (location) => {
    return (
                <Suspense fallback={<ProgressBar/>}>
                    <Switch>
                        {renderRoutes(location)}
                        <Redirect from="/" to={Routes.MEMBER_HOME}/>
                    </Switch>
                </Suspense>
    )
};

const renderRoutes = (location) => {
    return routes.map((route, index) => {
        return route.component ? (
            <Route key={index} path={route.path} exact={route.exact} name={route.name} render={props => {
                checkExistingRoute(location, props.history);
                return localStorage.getItem(Tokens.MEMBER) ?
                    <route.component {...props} /> :
                    <Redirect to={Routes.MEMBER_HOME}/>
            }}/>
        ) : (null);
    });
};

const renderAppFooter = (appName) => {
    return (
        <CFooter className="footer-fix">
            <Suspense fallback={<ProgressBar/>}>
                <Footer appName={appName}/>
            </Suspense>
        </CFooter>
    );
};

MemberLayout.propTypes = {
    member: PropTypes.object,
    location: PropTypes.object,
    permissions: PropTypes.array,
    appName: PropTypes.string,
    appLogo: PropTypes.string,
};

export default React.memo(MemberLayout);
