```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph of text.</p>
      <MyComponent />
    </div>
  );
}

// components/MyComponent.js

export default function MyComponent() {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

// pages/api/data.js

export default function handler(req, res) {
  res.status(200).json({ message: 'Data fetched successfully' });
}
```