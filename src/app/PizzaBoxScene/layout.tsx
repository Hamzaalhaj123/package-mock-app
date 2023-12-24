import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="absolute h-full w-full ">{children}</div>;
}
