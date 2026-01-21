import { useEffect, useState } from "react";
import axios from "axios";

function CertificateDashboard() {
  const [certificates, setCertificates] = useState([]);
  const [learnerName, setLearnerName] = useState("");
  const [courseName, setCourseName] = useState("");

  // Fetch all certificates
  const fetchCertificates = () => {
    axios.get("http://localhost:5000/api/certificates")
      .then(res => setCertificates(res.data));
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  // Generate new certificate
  const generateCertificate = () => {
    if(!learnerName || !courseName){
      alert("Please enter learner name and course name");
      return;
    }

    axios.post("http://localhost:5000/api/certificates/generate", {
      learnerName,
      courseName
    })
    .then(res => {
      alert("Certificate generated!");
      setLearnerName("");
      setCourseName("");
      fetchCertificates();
    })
    .catch(err => alert("Error generating certificate"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Certificates</h2>

      {/* Form to generate certificate */}
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          placeholder="Learner Name" 
          value={learnerName} 
          onChange={(e) => setLearnerName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input 
          type="text" 
          placeholder="Course Name" 
          value={courseName} 
          onChange={(e) => setCourseName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={generateCertificate}>Generate Certificate</button>
      </div>

      {/* Show all certificates */}
      {certificates.length === 0 && <p>No certificates yet.</p>}
      {certificates.map((cert, index) => (
        <div key={index} style={{
          border: "1px solid black",
          margin: "10px 0",
          padding: "10px",
          borderRadius: "5px"
        }}>
          <p><b>Learner:</b> {cert.learnerName}</p>
          <p><b>Course:</b> {cert.courseName}</p>
          <p><b>Date:</b> {new Date(cert.issueDate).toDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default CertificateDashboard;

