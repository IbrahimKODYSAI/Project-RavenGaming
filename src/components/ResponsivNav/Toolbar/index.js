import React from 'react';
import PropTypes from 'prop-types';
import DrawerToggleButton from 'src/components/ResponsivNav/SideDrawer/DrawerToggleButton';
import './Toolbar.scss';

const Toolbar = props => (
  <header className="toolbar">
    <div className="secondarydiv">
      <nav className="toolbar_navigation">
        <div>
          <DrawerToggleButton click={props.drawerclickHandler} />
        </div>
        <div className="toolbar_logo">RavenGaming</div>
        <div className="afterlogo1">
          <img src="./game-5.6s-236px.svg" alt="" />
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          {/* <ul>
            <li><a href="/">Test</a></li>
            <li><a href="/">Test</a></li>
            <li><a href="/">Test</a></li>

          </ul> */}
        </div>
      </nav>
    </div>
    <div className="researchbar ">
      <input id="researchinput" type="text" icon="search" placeholder="Search..." />
    </div>
  </header>
);
Toolbar.propTypes = {
  drawerclickHandler: PropTypes.func.isRequired,
};
export default Toolbar;
