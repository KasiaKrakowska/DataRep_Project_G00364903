//imports React libraries
import React from "react";
import axios from "axios";

//start Create class - export used in order to use component elsewhere
export class Create extends React.Component {

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
            poster: this.state.Poster
        }//end object newPhoto

        //promise - send asynchronous HTTP requests to REST endpoints and perform CRUD operations
        //send newPhoto data
        axios.post('http://localhost:4000/api/photos', newPhoto)
            //then returns an object as Promise
            .then((res) => {
                console.log(res);
            })
            //catch handles errors
            .catch((err) => {
                console.log(err);
            });//end axios.post

    }//end onSubmit method

    //start render method
    render() {
        //returns div tag content and print to screen 
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {/*input control - title*/}
                    <div className="form-group">
                        <label> Add New Title: </label>
                        <input type="text"
                            className="form-control"
                            //value method - uses existing title
                            value={this.state.Title}
                            //onChange method - change photo title
                            onChange={this.onChangeTitle}></input>
                    </div><br />

                    {/*input control - price*/}
                    <div className="form-group">
                        <label>Add New Price: </label>
                        <input type="text"
                            className="form-control"
                            //value method - uses existing price
                            value={this.state.Price}
                            //onChange method - change photos price
                            onChange={this.onChangePrice}></input>
                    </div><br />

                    {/*input control - poster*/}
                    <div className="form-group">
                        <label>Add New Poster: </label>
                        <textarea type="text"
                            className="form-control"
                            //value method - uses existing poster
                            value={this.state.Poster}
                            //onChange method - change photo poster
                            onChange={this.onChangePoster}>
                        </textarea>

                    </div><br />
                    {/*submit button*/}
                    <div className="form-group">
                        <input type="submit"
                            value="Add New Photo"
                            className="btn btn-warning"></input>
                    </div>
                </form>
            </div>
        );
    }//end render method
}//end Create class