//imports React libraries
import React from "react";
import axios from "axios";
import Styles from "../styles/contactForm.module.css";

//start ContactForm class - export used in order to use component elsewhere
export class ContactForm extends React.Component {

  //variables to keep track of the states name, email, subject and message
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
  //events functions to update state variables when a user changes the value of the input fields
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onSubjectChange(event) {
    this.setState({ subject: event.target.value })
  }

  onMsgChange(event) {
    this.setState({ message: event.target.value })
  }

  //function that executes when the user clicks on the Submit button
  submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/contactForm",
      data: this.state
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({ name: '', email: '', subject: '', message: '' })
  }
  //start render method
  render() {
    //returns div tag content and print to screen 
    return (
      <div><br /><br /><br /><br />
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-title">
                  <h2 className="title">Contact Us</h2>
                  <p>Let us know what you think! In order to provide better service,
                    please do not hesitate to give us your feedback. Thank you.</p><hr />
                  <form id="contact-form" onSubmit={this.submitEmail.bind(this)}
                    method="POST">
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <input placeholder="Your name here.." id="name" type="text"
                            required value={this.state.name}
                            onChange={this.onNameChange.bind(this)} />
                        </div>
                        <div className="col-md-6">
                          <input placeholder="Your email here..." id="email" type="email"
                            aria-describedby="emailHelp"
                            required value={this.state.email} onChange=
                            {this.onEmailChange.bind(this)} />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input placeholder="Subject here..." id="subject" type="text"
                        required value={this.state.subject}
                        onChange={this.onSubjectChange.bind(this)} />
                    </div>
                    <div className="form-group">
                      <input placeholder="Type your message here..." id="message"
                        rows="1"
                        required value={this.state.message}
                        onChange={this.onMsgChange.bind(this)} />
                    </div>
                    <button type="submit" className="primary-btn submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div><br /><br /><br /><br />
      </div>
    );
  }//end render method
}//end ContactForm class


