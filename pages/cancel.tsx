export default function Cancel() {
  return (
    <main style={{ maxWidth: 600, margin: '40px auto', padding: '0 16px', textAlign: 'center' }}>
      <h1>Checkout canceled</h1>
      <p>No charge was made. You can try again any time.</p>
      <a href="/" style={{ display: 'inline-block', marginTop: 16, textDecoration: 'underline' }}>
        Back to home
      </a>
    </main>
  );
}
