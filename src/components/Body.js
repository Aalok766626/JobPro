import React,{Component} from 'react';
import {ButtonDropdown,DropdownToggle,DropdownMenu,DropdownItem,Button} from 'reactstrap';

class Body extends Component{

  render(){
    return(
      <div className="app">
        <div className="body">
          <div className="container">
            <div className="row row-head">
              <div className="col-12">
                <p id="browse">3,000+ <i id="number">Browse Jobs</i></p>
                <p>Find Jobs, Employment & Career Oppurtunities</p>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <div className="rectangle">
                  <input className="search" type="search" placeholder="Search for Jobs, Tags, Description" />
                  <ButtonDropdown className="location" color="danger">
                    <DropdownToggle caret color="danger">
                      Select Location
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>
                        Something
                      </DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                  <Button color="danger" className="searchbtn">Search</Button>
                </div>
                <p id="keys"><span className="fa fa-tags"><strong>Trending Keywords : &nbsp;</strong>ui designer, developer, senior, it company, design, call center</span></p>
              </div>
              <div className="col-4">
                <div className="rectangle4">
                  <div className="row">
                    <h4 id="update">&gt;Recent Updates</h4>
                    <hr/>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <div className="rectangle1">
            <div className="container">
              <div className="row">
                <div className="col-2 foo">
                  <span className="fa fa-lg fa-spinner ml-3"></span>
                  <h5>Developer</h5>
                </div>
                <div className="col-2 foo">
                  <span className="fa fa-lg fa-desktop ml-4"></span>
                  <h5>Technology</h5>
                </div>
                <div className="col-2 foo">
                  <span className="fa fa-lg fa-balance-scale ml-4"></span>
                  <h5>Accounting</h5>
                </div>
                <div className="col-2 foo">
                  <span className="fa fa-lg fa-building ml-5"></span>
                  <h5>Government</h5>
                </div>
                <div className="col-2 foo">
                  <span className="fa fa-lg fa-ambulance ml-3"></span>
                  <h5>Medical</h5>
                </div>
                <div className="col-2 foo">
                  <span className="fa fa-lg fa-briefcase ml-4"></span>
                  <h5>All Jobs</h5>
                </div>
              </div>
            </div>
          </div> 
        </div>
        
        <footer>
          <div className="rectangle3">
            <div className="rectangle2">
              <div className="container">
                <div className="row">
                  <div className="col-3 trend">
                    <div className="margins">
                      <h3>TRENDING JOBS</h3>
                    </div>
                  </div>
                  <div className="col-3 jobs2">
                    <div className="margins">
                      <h5>Graphics Designer (UI/UX)</h5>
                    </div>
                  </div>
                  <div className="col-3 jobs">
                    <div className="margins">
                      <h5>Graphics Designer (UI/UX)</h5>
                    </div>
                  </div>
                  <div className="col-3 jobs2">
                    <div className="margins">
                      <h5>Graphics Designer (UI/UX)</h5>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>     
        </footer>
      </div>
    );
  }
}
export default Body;