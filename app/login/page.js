import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Login</button>
        <Link href="/join" passHref>        
            Join
        </Link>
      </form>
    </div>
  );
} 