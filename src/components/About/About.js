import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav_links" className='subnav'>
          <Link to='/about'>
          <h3>About</h3>
          </Link><Link className="subnav_links" to='/about/history'>
          <h3>History</h3>
          </Link><Link className="subnav_links" to='/about/contact'>
          <h3>
            Contact
          </h3>
          </Link>
        </div>
        <div className='box'>
          <Switch>
            <Route component={History} path='/about/history'/>
            <Route component={Contact} path='/about/contact'/>
            <Route exact path='/about' render={()=>(
              <div>
              <h1>About the University</h1>
              <p>Curabitur egestas libero vel tortor tincidunt finibus. Proin sollicitudin magna nulla, ac aliquet tellus tincidunt eu. Pellentesque elit ex, accumsan id lacus euismod, laoreet ornare est. Mauris sagittis justo ut pharetra lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris quam justo, mattis ut ornare eget, porttitor cursus nisl. Proin efficitur libero massa, vitae egestas nibh pellentesque eu. Ut sodales velit ipsum. In dapibus, nisl nec tristique pharetra, ante ligula iaculis dolor, nec aliquet odio est ultrices tellus. Nulla efficitur venenatis urna finibus ullamcorper. Aenean ut dictum tellus. Nullam turpis ex, dapibus vel hendrerit nec, dignissim id arcu.
              </p>
              </div>
              )
            }/>

          </Switch>
        </div>
      </div>
    )
  }
}