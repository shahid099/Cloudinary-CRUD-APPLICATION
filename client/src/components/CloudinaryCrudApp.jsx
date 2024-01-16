import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CloudinaryCrudApp = () => {
  const [file, setFile] = useState(null);
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await axios.get('http://localhost:8080/retrieve');
      setMediaList(response.data.resources);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData);
      console.log(response.data);

      // Refresh the media list after upload
      fetchMedia();
    } catch (error) {
      console.error('Error uploading media:', error);
    }
  };

  const handleDelete = async (publicId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/delete/${publicId}`);
      console.log(response.data);

      // Refresh the media list after deletion
      fetchMedia();
    } catch (error) {
      console.error('Error deleting media:', error);
    }
  };

  return (
    <div className='box'>
      <h1 className='center'>Cloudinary CRUD Example with React</h1>

      {/* Upload Form */}
      <form className='formAlign' onSubmit={handleUpload}>
        <input type="file" onChange={handleFileChange} required />
        <button className='button' type="submit">Upload</button>
      </form>

      {/* Uploaded Media List */}
      <div className='myDataBox'>
        {mediaList.map((media) => (
          <div className='eachElement' key={media.public_id}>
            <img className='imgFromCloud' src={media.url} alt={media.public_id} />
            <button className='deleteButton' onClick={() => handleDelete(media.public_id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CloudinaryCrudApp;
