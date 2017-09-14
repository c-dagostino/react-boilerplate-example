import React from 'react';
import {FormattedMessage} from 'react-intl';
import userManager from '../../utils/userManager';
import {connect} from 'react-redux';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';
import {makeSelectUser} from 'containers/App/oidcSelectors';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

    onLoginButtonClick = (event) => {
        event.preventDefault();
        userManager.signinRedirect();
    };

    onLogoutButtonClick = (event) => {
        event.preventDefault();
        userManager.signoutPopup()
    };


    render() {

        const {user} = this.props;
        const loginStyle = {
            float: 'right'};

        return (
            <div>
                <div style={loginStyle}>
                    {user ? <strong>Welcome, {user ? user.profile.name : 'Mister Unknown'}! |
                            <button onClick={this.onLogoutButtonClick}>Log Out</button>
                        </strong> : <strong>
                            <button onClick={this.onLoginButtonClick}>Login</button>
                        </strong>}
                </div>
                <br/>
                <NavBar>
                    <HeaderLink to="/">
                        <FormattedMessage {...messages.home} />
                    </HeaderLink>
                    {/*<HeaderLink to="/features">*/}
                    {/*<FormattedMessage {...messages.features} />*/}
                    {/*</HeaderLink>*/}
                    <HeaderLink to="/courses">
                        <FormattedMessage {...messages.courses} />
                    </HeaderLink>
                    <HeaderLink to="/coursesGrid">
                        <FormattedMessage {...messages.coursesGrid} />
                    </HeaderLink>
                    <HeaderLink to="/customPager">
                        <FormattedMessage {...messages.customPager} />
                    </HeaderLink>
                </NavBar>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    };
}

function mapStateToProps(state, ownProps) {

    const selectUser = makeSelectUser();


    return {
        user: selectUser(state, ownProps),

    };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Header);
