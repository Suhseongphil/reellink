export default function Join() {
  return (
    <div>
      <h2>Join Page</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Join</button>
      </form>
    </div>
  );
} 