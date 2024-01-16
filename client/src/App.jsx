import './App.css';
import CloudinaryCrudApp from './components/CloudinaryCrudApp';
function App() {

  return (
    <>
      <header><h1 className='center'>Header of Cloudinary Crud Application</h1></header>
      <main className="main">
        <CloudinaryCrudApp />
      </main>
      <footer className='center footer'>Footer of Cloudinary Crud Application</footer>
    </>
  );
}

export default App;
