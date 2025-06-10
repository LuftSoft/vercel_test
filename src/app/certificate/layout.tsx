export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl px-4">{children}</div>
      </div>
    </main>
  );
}
