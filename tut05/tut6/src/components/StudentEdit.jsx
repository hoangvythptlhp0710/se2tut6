import React from 'react';
import axios from 'axios';

export default class StudentEdit extends React.Component {

    state = {
        name: '',
        age: ''
    }

    url = "http://localhost:8080/";

    handleChange = event => {
        this.setState({[event.target.id]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        event.target.reset();
        this.setState({name: '', age: ''});

        const student = {
            name: this.state.name,
            age: this.state.age

        }

        axios.put(this.url + 'update/' + this.props.studentId, student)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="container text-center">
                    {/*<h3 className="bg-warning text-primary p-2">EDIT STUDENT</h3>*/}
                <form className="form card p-3 bg-light" onSubmit={this.handleSubmit}>
                    <label className="form-label h5 text-success">Name</label>
                    <input className="form-control" type="text" id="name" minLength="3" maxLength="20"
                           onChange={this.handleChange}/>
                    <label className="form-label h5 text-success">Age</label>
                    <input className="form-control" type="number" id="age" min="1" max="100"
                           onChange={this.handleChange}/>
                    <div className="text-center">
                        <button className="btn btn-primary mt-3 " type="submit"
                                onClick={() => window.location.reload(false)}>
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}