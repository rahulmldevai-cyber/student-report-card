import { useState } from "react"
import NavBar from "./Components/NavBar"
import Students from "./Components/Students"

const App=()=>{
    const [students, setStudents] = useState([])

    const addStudent = (newStudent) => {
        setStudents([...students, newStudent])
    }

    return(
        <div className="App">
            <NavBar onAddStudent={addStudent}/>
            <Students students={students}/>
        </div>
    )
}
export default App