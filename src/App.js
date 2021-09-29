import React from 'react';
import './App.scss';
// import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Support from './pages/Support';
import { Messages, MessageOne, MessageTwo } from './pages/Messages';
import {Products} from './pages/Products';
import Team from './pages/Team';
import { Users } from './pages/Users';
import Revenue from './pages/Revenue';



 export default function App() {

  return (
    
     <Router>
      <Sidebar />
    
         <Switch>
           <Route path="/overview" exact component={Overview} />
           <Route path="/overview/Users" exact component={Users} />
           <Route path="/overview/revenue" exact component={Revenue} />
           <Route path="/reports" exact component={Reports} />
           <Route path="/reports/reports1" exact component={ReportsOne} />
           <Route path="/reports/reports2" exact component={ReportsTwo} />
           <Route path="/reports/reports3" exact component={ReportsThree} />
           <Route path="/products" exact component={Products} />
           <Route path="/team" exact component={Team} />
           <Route path="/messages" exact component={Messages} />
           <Route path="/messages/message1" exact component={MessageOne} />
           <Route path="/messages/message2" exact component={MessageTwo} />
           <Route path="/Support" exact component={Support} />
             </Switch>
           </Router>
          
  );
}

