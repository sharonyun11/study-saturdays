import React from 'react';
import axios from 'axios';

import StudentList from './StudentList';
import SingleStudent from './SingleStudent';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      selectedStudent: {}
    };
    this.getStudents = this.getStudents.bind(this);
    this.selectStudent = this.selectStudent.bind(this);
  }

  componentDidMount() {
    this.getStudents();
  }

  selectStudent(student) {
    return this.setState({
      selectedStudent: student
    });
  }

  getStudents() {
    axios
      .get('/student')
      .then(res => this.setState({ students: res.data }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {this.state.selectedStudent.id && (
              <SingleStudent selectedStudent={this.state.selectedStudent} />
            )}
            <StudentList
              students={this.state.students}
              selectedStudent={this.state.selectedStudent}
              selectStudent={this.selectStudent}
            />
          </tbody>
        </table>
      </div>
    );
  }
}
