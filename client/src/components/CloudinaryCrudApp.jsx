import React, { useContext } from 'react';
import axios from 'axios';
import MyContext from '../contextapi/createContext';
const CloudinaryCrudApp = () => {
  const data = useContext(MyContext);
  const { file, setFile, mediaList, setMediaList, fetchMedia, handleDelete, handleUpload } = data;

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
