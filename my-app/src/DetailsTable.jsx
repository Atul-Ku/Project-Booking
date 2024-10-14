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
  </div>
  );
}

export default DetailsTable;
