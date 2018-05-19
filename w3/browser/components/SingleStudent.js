import React from 'react';
import axios from 'axios';

export default function SingleStudent(props) {
  const student = props.selectedStudent;

  // avgGrade () {
  //   axios.get(`/student/${student.id}`)
  //   .then(res => res.data)
  //   console.log(res.data)
  // }

  return (
    <tr key={student.id}>
      <td>{student.fullName}</td>
      {/* <td>{this.avgGrade()}</td> */}
    </tr>
  );
}
