import React from "react"

const Students = ({ students }) => {
    
    // Simple counting logic for passed and failed
    let passedCount = 0
    let failedCount = 0
    
    students.forEach(s => {
        if (s.marks >= 50) {
            passedCount++
        } else {
            failedCount++
        }
    })

    const totalCount = students.length

    return (
        <div className="students-container">
            <div className="stats-boxes">
                <div id="passed-box" className="stat">
                    No. of Students passed: {passedCount}
                </div>
                <div id="failed-box" className="stat">
                    No. of Students failed: {failedCount}
                </div>
                <div id="total-box" className="stat">
                    Total Students: {totalCount}
                </div>
            </div>

            {students.length > 0 && (
                <div className="report-table">
                    <h2>Report Card</h2>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Marks</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((s, index) => (
                                <tr key={index}>
                                    <td>{s.name}</td>
                                    <td>{s.marks}</td>
                                    <td style={{ color: s.marks >= 50 ? "green" : "red", fontWeight: "bold" }}>
                                        {s.marks >= 50 ? "PASS" : "FAIL"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default Students