import './App.css';
import Title from './components/Title';
import { Toaster } from 'react-hot-toast';
import SearchHeader from './components/SearchHeader';

function App() {
  return (
    <>
      <div className="container">
        <Title>Stock App</Title>
        <SearchHeader></SearchHeader>
      </div>
      <div> </div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </>
  );
}

export default App;
