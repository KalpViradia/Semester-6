export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-light d-flex justify-content-center align-items-center vh-100" 
         style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ maxWidth: "420px", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
