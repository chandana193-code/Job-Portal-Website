import { useEffect, useState } from "react";
import '../Styling/EmployerDashbord.css';
import axios from "axios";

const EmployerDashbord = () => {
   const [userList, setUserList] = useState([]);
   
   useEffect(() => {
    axios.get("http://localhost:9090/userregistration/userskilsdetails") 
      .then((response) => {
        setUserList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user resumes:", error);
      });
   }, []);

  const handleDownload = async (userName) => {
  try {
    const response = await axios.get(`http://localhost:9090/userregistration/download/${userName}`, {
      responseType: "blob", 
    });

    const blob = new Blob([response.data]);
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;

    link.setAttribute("download", `${userName}_resume.pdf`);

    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Error downloading resume:", error);
    alert("Failed to download resume.");
  }
 };
  return (
    <div className="employer-dashboard">
      <h2>Applicants List</h2>
      <table className="resume-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email ID</th>
            <th>Work Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.emailId}</td>
              <td>{user.workstatus}</td>
              <td>
                <button onClick={() => handleDownload(user.userName)}>
                  Download Resume
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployerDashbord