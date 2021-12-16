//imports React libraries
import React from "react";
import axios from "axios";
import Styles from '../styles/update.module.css';

//start Update class - export used in order to use component elsewhere
export class Update extends React.Component {

    //constructor method - called automatically when we created an object from that class
    constructor() {
        super();
        //bind used to pass the data as an argument to the function of a class based component
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        this.state = {
            Title: "",
            Price: "",
            Poster: ""
        }//end state
    }//end constructor

    //a lifecycle hook that gets invoked right after a React component has been mounted
    componentDidMount() {
        //logs id to the console
        console.log(this.props.match.params.id);
        //a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser
        axios.get('http://localhost:4000/api/photos/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Title: response.data.title,
                    Price: response.data.price,
                    Poster: response.data.poster
                })
            })
            //callback function if something goes wrong
            .catch((error) => {
                console.log(error);
            });
    }//end componentDidMount

    //start onChangeTitle method
    onChangeTitle(x) {
        //when the valuse changes - update state
        this.setState({
            Title: x.target.value
        });
    }//end onChangeTitle

    //start onChangePrice method
    onChangePrice(x) {
        //when the valuse changes - update state
        this.setState({
            Price: x.target.value
        });
    }//end onChangePrice

    //start onChangePoster method
    onChangePoster(x) {
        //when the valuse changes - update state
        this.setState({
            Poster: x.target.value
        });
    }//end onChangePoster

    //start onSubmit method with 1 argument "x"
    onSubmit(x) {
        x.preventDefault()//stops from calling submit multiple times
        alert("Photo: " + this.state.Title + " " + this.state.Price + " " + this.state.Poster);

        //creating object
        const newPhoto = {
            title: this.state.Title,
            price: this.state.Price,
            poster: this.state.Poster,
            _id: this.state._id
        }//end object newPhoto

        //first parameter is the URL, and the 2nd is the HTTP request body
        axios.put('http://localhost:4000/api/photos/' + this.state._id, newPhoto)
            .then(res => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.data);
            });

    }//end onSubmit method

    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12"></div>
                            <br /><br /> <h2 className="title">Change Item</h2>
                            <p>To change item in our gallery, simply type information into the appropriate fields bellow. Thank you.</p><hr />
                            <form onSubmit={this.onSubmit}>
                                {/*input control - title*/}
                                <div className="form-group">
                                    <input placeholder="New Name here..." type="text"
                                        //value method - uses existing title
                                        value={this.state.Title}
                                        //onChange method - change photo title
                                        onChange={this.onChangeTitle}></input>
                                </div><br />

                                {/*input control - price*/}
                                <div className="form-group">
                                    <input placeholder="New Price here..." type="text"
                                        //value method - uses existing price
                                        value={this.state.Price}
                                        //onChange method - change photos price
                                        onChange={this.onChangePrice}></input>
                                </div><br />

                                {/*input control - poster*/}
                                <div className="form-group">
                                    <input placeholder="New Poster here..." type="text"
                                        //value method - uses existing poster
                                        value={this.state.Poster}
                                        //onChange method - change photo poster
                                        onChange={this.onChangePoster}>
                                    </input>

                                </div><br />
                                {/*submit button*/}
                                <div className="form-group">
                                    <button type="submit"
                                        value="Add New Photo"
                                        className="primary-btn submit">Update Item</button><br />
                                </div>
                            </form><br /><br />
                        </div>
                    </div>
                </div> <br />
            </div>
        );
    }//end render method
}//end Update class