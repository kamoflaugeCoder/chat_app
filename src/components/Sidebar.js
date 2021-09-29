import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarInfo} from './SidebarInfo';
import SubMenu from './Submenu';
import { IconContext } from 'react-icons/lib';




// import{
//     Navbar,
//     NavbarBrand,
//     Collapse,
//     NavbarToggler,
//     // Nav, 
//     NavItem,
//     Button
// } from 'reactstrap';

const Nav = styled.div`
background: #15171c;
	height: 80px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height:80px;
  display:flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
background: #15171c;
width:250px;
height:100vh;
display:flex;
justify-content: center;
position:fixed;
top: 0;
left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index:10;
`;

const SidebarWrap = styled.div`
width:100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return(
    <>
    <IconContext.Provider value={{color: `#fff`}}>
    <Nav>
      <NavIcon to='#'>
        <FaIcons.FaBars onClick={showSidebar} />
      </NavIcon>
    </Nav>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <NavIcon to='#'>
          <AiIcons.AiOutlineClose onClick={showSidebar} />
        </NavIcon>
        {SidebarInfo.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </SidebarNav>
    </IconContext.Provider>
    </>
  );

    // const [isOpen, setIsOpen] = useState(false);
    // const toggle = () => {
    //     let newIsOpen = !isOpen;
    //     setIsOpen(newIsOpen);
    // }
    // return(
    //   <div>
    //     <Navbar className="sidebar">
    //         <NavbarBrand className="butn" href="/">Shopping Cart</NavbarBrand>
    //         <NavbarToggler className="butn"  onClick={toggle}/>
    //         <Collapse isOpen={isOpen} navbar>
                
    //                 <NavItem>
    //                     <Button className="logout-btn" onClick={props.clickLogout}></Button>
    //                 </NavItem>
                
    //         </Collapse>

    //   {/* <Drawer anchor="right" open={cartOpen} onClose={() => setState({ cartOpen: false })}> 
		// 			<Cart
		// 				cartItems={cartItems}
		// 				addToCart={handleAddToCart}
		// 				removeFromCart={handleRemoveFromCart}
		// 			/>
		// 	</Drawer> */}
    //     </Navbar>



    //     </div>
    // )
};

export default Sidebar;