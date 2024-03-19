export default function PrivateLayout({
  children,
}: {
  // children with the type of React.ReactNode
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
