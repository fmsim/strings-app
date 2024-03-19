export default function PublicLayout({
  children,
}: {
  // children with the type of React.ReactNode
  children: React.ReactNode;
}) {
  return (
    <main className="flex justify-center items-center max-w-md min-h-screen m-auto">
      {children}
    </main>
  );
}
