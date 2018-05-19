import React from 'react';
import SingleStudent from './SingleStudent';

export default function StudentList(props) {
  let currStudent = props.students.map(student => {
    return (
      <tbody key={student.id}>
        <tr>
          <td>{student.fullName}</td>
          <td onClick={() => props.selectStudent(student)}>Details</td>
        </tr>
      </tbody>
    );
  });
  return currStudent;
}
