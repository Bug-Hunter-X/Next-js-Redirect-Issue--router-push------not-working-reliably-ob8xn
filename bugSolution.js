```javascript
//pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  const handleClick = () => {
    router.replace('/'); // Use router.replace for reliable redirection
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go back to Home</button>
    </div>
  );
}
```