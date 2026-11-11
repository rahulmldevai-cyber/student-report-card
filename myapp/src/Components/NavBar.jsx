import { useState } from "react"

const NavBar = ({ onAddStudent }) => {
    const [name, setName] = useState("")
    const [marks, setMarks] = useState("")

    const AddStudent = () => {
        if (name === "" || marks === "") {
            alert("Please enter both name and marks!")
            return
        }

        const studentData = {
            name: name,
            marks: parseFloat(marks)
        }

        onAddStudent(studentData)

        // Reset the input fields
        setName("")
        setMarks("")
    }

    return (
        <div className="NavBar">
            <input 
                type="text" 
                placeholder="Enter Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Enter Marks" 
                value={marks} 
                onChange={(e) => setMarks(e.target.value)} 
            />
            <button onClick={AddStudent}>Add Student</button>
        </div>
    )
}

export default NavBar