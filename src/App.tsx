import { useState } from 'react';
import { add, validateNumberString } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const handleCalculate = () => {
    const isInvalid = validateNumberString(input);
    if (isInvalid) {
      setError(true);
      return;
    }

    const result = add(input);
    setResult(result);
    setError(false);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', color: '#aaa', textAlign: 'center' }}>
      <img
        src='https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        width={600}
        height={400}
        loading='lazy'
        alt='unsplash image'
      />

      <h1 style={{ color: 'black' }}>String Calculator</h1>

      <label htmlFor="numbers" style={{ display: 'block', marginTop: '10px', color: 'GrayText' }}>
        Enter comma-separated numbers
      </label>

      <textarea
        style={{
          width: '30%',
          minHeight: '100px',
          margin: '10px 0',
          padding: '10px',
          fontSize: '16px',
          border: error ? '2px solid red' : '1px solid #ccc',
          borderRadius: '4px',
          color: '#333',
        }}
        aria-invalid={error}
        aria-describedby={error ? 'error-message' : undefined}
        placeholder="e.g. 1,2,3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <button
        onClick={handleCalculate}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0d6efd',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
        Calculate
      </button>
      {error && <p style={{ color: 'red' }}>Invalid Input Value</p>}
      {result !== null && !error && <p style={{ color: 'green' }}>Result: {result}</p>}

      {error && <div role='alert'
        aria-live="assertive">
        <p style={{ marginTop: '10px', color: 'GrayText' }}>Make sure you enter numbers correctly!</p>
      </div>}
    </div>
  );
};

export default App;
