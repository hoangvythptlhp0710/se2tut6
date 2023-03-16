import React from 'react';
import axios from 'axios';
import StudentEdit from "./StudentEdit";

export default class StudentList extends React.Component {
    state = {
        students: []
    }

    url = 'http://localhost:8080/';

    componentDidMount() {
        this.fetchStudentList();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.reloadList !== prevProps.reloadList) {
            this.fetchStudentList();
        }
    }

    fetchStudentList = () => {
        axios.get(this.url)
            .then(res => {
                const students = res.data;
                this.setState({students});
            })
            .catch(error => {
                console.log(error);
            });
    };

    handleUpdate = (id) => {
        axios.put(this.url + 'update/' + id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.fetchStudentList();
            })
            .catch(error => {
                console.log(error);
            });
    }
    handleDelete = (id) => {
        axios.delete(this.url + 'delete/' + id)
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.fetchStudentList();
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            // ...
            <div className="container text-center p-0 mr-2 pr-2 ">
                <h1>Student List</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Edit</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.students.map(student => (
                        <tr key={student.id}>
                            <th scope="row">{student.id}</th>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>
                                <StudentEdit studentId={student.id} reloadList={this.fetchStudentList}/>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => this.handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}