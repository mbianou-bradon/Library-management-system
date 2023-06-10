import { studentData } from "../../studentData"
import "./studenttable.css"

export default function StudentTable(){

    return(
        <div className="table_container">
            <table>
                <thead>
                    <th>
                        <td>Student ID</td>
                    </th>
                    <th>
                        <td>Student Name</td>
                    </th>
                    <th>
                        <td>Contact</td>
                    </th>
                    <th>
                        <td>No of Borrowed</td>
                    </th>
                </thead>
                <tbody>
                    {
                        studentData.map((student, index)=>{
                            return (
                                <tr>
                                    <td>{student.StudentID}</td>
                                    <td>{student.StudentName}</td>
                                    <td>{student.Contact}</td>
                                    <td>{student.borrowedBooks}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}