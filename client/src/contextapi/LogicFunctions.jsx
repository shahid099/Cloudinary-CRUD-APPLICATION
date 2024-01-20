import React, { useState, useEffect } from "react";
import axios from 'axios';
import MyContext from "./createContext"
const LogicFunctions = (props) => {
    const [file, setFile] = useState(null);
    const [mediaList, setMediaList] = useState([]);
    // Function to Fetch data from the Cloudinary.
    useEffect(() => {
        fetchMedia();
      }, []);
    const fetchMedia = async () => {
        try {
          const response = await axios.get(`${import.meta.env.VITE_ENTPOINT}/retrieve`);
          setMediaList(response.data.resources);
        } catch (error) {
          console.error('Error fetching media:', error);
        }
      };
    //   Function to Upload the data to the Cloudinary
    const handleUpload = async (event) => {
        event.preventDefault();
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
          const response = await axios.post(`${import.meta.env.VITE_ENTPOINT}/upload`, formData);
          console.log(response.data);
    
          // Refresh the media list after upload
          fetchMedia();
        } catch (error) {
          console.error('Error uploading media:', error);
        }
      };

    //   Function to Delete the Images from the Cloudinary
      const handleDelete = async (publicId) => {
        try {
          const response = await axios.delete(`${import.meta.env.VITE_ENTPOINT}/delete/${publicId}`);
          console.log(response.data);
    
          // Refresh the media list after deletion
          fetchMedia();
        } catch (error) {
          console.error('Error deleting media:', error);
        }
      };

  return (
    <MyContext.Provider value={{ file, setFile, mediaList, setMediaList, fetchMedia, handleDelete, handleUpload }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default LogicFunctions
 