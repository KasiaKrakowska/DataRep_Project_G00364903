//import React libraries and components
import { Component } from 'react';
import './App.css';
import { Home } from './components/home';
import { Footer } from './components/footer';
import { Header } from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';
import { Update } from './components/update';
import { ContactForm} from './components/contactForm';

//class App representing Component
class App extends Component {
  //render method needed for class to run
  render() {
    //returns div tag content and print to screen 
    return (

      //enables the navigation among views of various components in a application
      <Router>
        <div className="App">
          {/* Render Header component */}
          <Header></Header>
          
          {/* Add Switch for navigation */}
          {/*returns only first matching route*/}
          <Switch>
            {/*create links to different components and implements navigation*/}
            <Route path='/' component={Home} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/update/:id' component={Update} exact />
            <Route path='/contactForm' component={ContactForm} exact />
          </Switch>

          {/* Render Footer component */} 
          <Footer></Footer>
        </div>
        
      </Router>
    );//end return method
  }//end render method
}//end main class 

export default App;
