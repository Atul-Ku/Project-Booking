import React, { useEffect, useState } from 'react';
import './DetailsTable.css';  // Importing the custom CSS file

function DetailsTable({ columns }) {
  const [details, setDetails] = useState([]);  // State to store fetched data
  const [loading, setLoading] = useState(true);  // State to manage loading status
  const [error, setError] = useState(null);  // State to store error messages

  // Fetch data from Django API when the component is mounted
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/details/')  // URL of your Django API
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);  // Log the data to inspect the format
        setDetails(data);  // Set the fetched data to the state
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message);  // Handle errors
        setLoading(false);  // Set loading to false in case of an error
      });
  }, []);  // Empty array ensures this effect runs only once when the component mounts

  // Render loading spinner or error message if applicable
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  const handleDeleteAll = () => {
    if (window.confirm("Are you sure you want to delete all details?")) {
      fetch('http://127.0.0.1:8000/api/clear_all_details/', {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            // If response status is 204, we don't expect any content
            setDetails([]);  // Clear the details from the state
            alert("All details deleted successfully."); // Alert success message
          } else {
            throw new Error('Failed to delete details');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error deleting details: ' + error.message);
        });
    }
  };
  

  return (
    <div className="details-table-container">
    <table className="details-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th> 
          ))}
        </tr>
      </thead>
      <tbody>
        {details.map((row, rowIndex) => (
          <tr key={row.id || rowIndex}> 
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                {row[column] !== undefined ? row[column] : "N/A"} 
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <button 
        className="delete-all-button" 
        onClick={handleDeleteAll} 
        style={{ marginTop: '16px', backgroundColor: '#d9534f', color: '#fff', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        Delete All Details
      </button>
  </div>
  );
}

export default DetailsTable;
