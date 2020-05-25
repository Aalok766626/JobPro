import React,{Component} from 'react';
import {Navbar,NavbarBrand,NavItem,NavbarToggler,Collapse,NavLink,Nav,Button} from 'reactstrap';

class Header extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
    this.toggleNav=this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen

    });
  }
  render(){
    return(
      <Navbar dark expand="sm" color="dark" fixed="top">
        
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="ml-20" href="/home"><img src="#" alt=""/><span className="fa fa-lg fa-image"></span><strong id="jobpro">&nbsp;Job Pro</strong></NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem className="ml-4">
                  <NavLink className="nav-link"  to='/home'>Home</NavLink>
                </NavItem>
                <NavItem className="ml-4">
                  <NavLink className="nav-link" to='/lists'>Listing</NavLink>
                </NavItem>
                <NavItem className="ml-4">
                  <NavLink className="nav-link" to='/candidates'>Candidates</NavLink>
                </NavItem>
                <NavItem className="ml-4">
                  <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                </NavItem>
                <NavItem className="ml-4">
                  <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                </NavItem>
                <NavItem className="ml-4">
                <NavLink className="nav-link" to='/contact'><span className="fa fa-search"></span></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        <Nav navbar className="ml-4">
          <NavItem>
            <Button outline type="button" color="success">Sign Up</Button>
          </NavItem>
          <NavItem className="ml-2">
            <Button outline type="button" color="primary">Login</Button>
          </NavItem>
        </Nav>
        <hr></hr>
        </Navbar>
    );
  }
}
export default Header;