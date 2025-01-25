import React, { useEffect, useState } from 'react';
import './DetailsTable.css'; // Importing the custom CSS file

function DetailsTable() {
  const columns = ["user", "from_location", "to_location", "age","message","date","phone"];
  const [details, setDetails] = useState([]); // State to store fetched data from /api/details
  const [saveData, setSaveData] = useState([]); // State to store fetched data from /api/save
  const [loadingDetails, setLoadingDetails] = useState(true); // State to manage loading status for details
  const [loadingSave, setLoadingSave] = useState(true); // State to manage loading status for save data
  const [errorDetails, setErrorDetails] = useState(null); // State to store error messages for details
  const [errorSave, setErrorSave] = useState(null); // State to store error messages for save data

  // Fetch data from /api/details and /api/save when the component is mounted
  useEffect(() => {
    // Fetch details
    fetch('http://127.0.0.1:8000/api/details/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok for details');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched details data:", data); // Log the data to inspect the format
        setDetails(data); // Set the fetched data to the state
        setLoadingDetails(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setErrorDetails(error.message); // Handle errors
        setLoadingDetails(false); // Set loading to false in case of an error
      });

    // Fetch save data
    fetch('http://127.0.0.1:8000/api/savedetails/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok for save data');
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched save data:", data); // Log the data to inspect the format
        setSaveData(data); // Set the fetched save data to the state
        setLoadingSave(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setErrorSave(error.message); // Handle errors
        setLoadingSave(false); // Set loading to false in case of an error
      });
  }, []); // Empty array ensures this effect runs only once when the component mounts

  // Render loading spinner or error message if applicable
  if (loadingDetails || loadingSave) {
    return <div>Loading...</div>;
  }

  if (errorDetails) {
    return <div>Error fetching details: {errorDetails}</div>;
  }

  if (errorSave) {
    return <div>Error fetching save data: {errorSave}</div>;
  }

  const handleDeleteEntry = (id, rowData) => {
    if (window.confirm("Are you sure to Save this entry?")) {
      // Make a single API call to delete and save in the backend using POST
      fetch(`http://127.0.0.1:8000/api/details/delete_and_save/`, {
        method: 'POST', // Changed to POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, rowData }), // Send both the id and the rowData
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to delete and save entry');
          }
          return response.json(); // Optional: Handle the response if needed
        })
        .then((savedEntry) => {
          // Optionally, you can log the saved entry
          console.log("Saved entry:", savedEntry);
          // Update the state by removing the deleted entry
          setDetails((prevDetails) => prevDetails.filter((detail) => detail.id !== id));
        
          // Update the `saveData` state to add the saved entry
          fetch('http://127.0.0.1:8000/api/savedetails/')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok for save data');
            }
            return response.json();
          })
          .then((data) => {
            console.log("Fetched save data:", data); // Log the data to inspect the format
            setSaveData(data); // Set the fetched save data to the state
            setLoadingSave(false); // Set loading to false once data is fetched
          })
          .catch((error) => {
            setErrorSave(error.message); // Handle errors
            setLoadingSave(false); // Set loading to false in case of an error
          });
          alert("Entry saved successfully"); // Alert success message
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error: ' + error.message);
        });
    }
  };
  
  

  const handleDeleteAll = () => {
    if (window.confirm("Are you sure to delete all details?")) {
      fetch('http://127.0.0.1:8000/api/clear_all_details/', {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            setSaveData([]); // Clear the details from the state
            alert("All details deleted successfully"); // Alert success message
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
      {/* First Table: Details */}
      <h2>Pending Train Bookings</h2>
      <table className="details-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Actions</th> {/* Column for actions */}
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
              <td>
                <button
                  className="delete-entry-button"
                  onClick={() => handleDeleteEntry(row.id, row)}
                  style={{ backgroundColor: '#d9534f', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                >
                  Book
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Second Table: Save Data */}
      <h2>Confirmed Train Bookings</h2>
      <table className="details-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {saveData.map((row, rowIndex) => (
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
        Erase Saved Details
      </button>
      
    </div>
  );
}

export default DetailsTable;
