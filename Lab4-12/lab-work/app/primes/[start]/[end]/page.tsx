export default async function PrimePage({ params }: {params :{start : string, end : string}}) {
  const {start, end} = await params;

  const isPrime = (num: number) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const primes: number[] = [];
  for (let i = parseInt(start); i <= parseInt(end); i++) {
    if (isPrime(i)) primes.push(i);
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">
        Prime numbers between {start} and {end}
      </h2>

      {primes.length > 0 ? (
        <p>{primes.join(", ")}</p>
      ) : (
        <p>No prime numbers found.</p>
      )}
    </div>
  );
}
