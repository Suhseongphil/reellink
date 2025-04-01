import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h4>Hello World</h4>
      <h3>RellLink</h3>
      <Link href="/login" passHref>
        <button >
          Login
        </button>
      </Link>
    </div>
  );
}
