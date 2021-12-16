//imports React library
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "../styles/home.module.css";

// Import Icon name to be used ( use as a component in code )
import { SiAframe } from "react-icons/si";
import { TiBrush } from "react-icons/ti";
import { BsDoorOpen } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import 'animate.css';

//start Content class - export used in order to use component elsewhere
export class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  //set up dte and time
  tick() {
    this.setState({ date: new Date() });
  }

  //a lifecycle hook that gets invoked right after a React component has been mounted
  newComponentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  //a lifecycle hook that gets invoked right after a React component has been mounted
  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
  //a lifecycle hook that gets invoked right after a React component has been mounted
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  //start render method
  render() {
    //returns div tag home and print to screen 
    return (
      <div>
        <Container>
          {/*function to display time*/}
          <div className="animate__animated animate__bounce">{this.state.date.toString()}</div>
          <Container fluid className={Styles.home_container}>
            <Row>
              <Col md={12} sm={12}>
                <h2>WELCOME</h2>
                <Row className="my-5">
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <SiAframe className={Styles.home_icon} />
                      </span>
                      <h4>Design</h4>
                      <p className={Styles.home_p}>
                      Together, we linked by their belief in good paintings, despite the conviction that painting as a medium is over. At Neue, painting is doing just great! We present works by well-known and recognised artists as well as those just making their debuts, some of them even as students.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <TiBrush className={Styles.home_icon} />
                      </span>
                      <h4>Art</h4>
                      <p className={Styles.home_p}>
                      Neue is opening its doors to everyone. The idea remains the same: in art, modernity and tradition, quality and experimentation, in business, a combination of commercial, exhibition and editorial functions.
                      </p>
                    </div>
                  </Col>
                </Row>

                {/* Second row */}

                <Row className="my-5">
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <BsDoorOpen className={Styles.home_icon} />
                      </span>
                      <h4>Space</h4>
                      <p className={Styles.home_p}>
                      We are dedicated to promoting art and are committed to the long term development of each of our artists. We showcase the work of contemporary artists.
                      </p>
                    </div>
                  </Col>
                  <Col md={6} className={Styles.home_col}>
                    <div>
                      <span>
                        <TiHomeOutline className={Styles.home_icon} />
                      </span>
                      <h4>Colective</h4>
                      <p className={Styles.home_p}>
                      We have a long history of helping artists to strengthen their collections. We offer a personalised art advisory service that ranges from single works to large collections. We advise on all aspects of building, managing and presenting your work.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    )//end return function
  };//end render method
}//end Home class