import ImageUploader from "@/components/ImageUploader";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>hamza</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <Link href="/MugScene">Click to see the scene</Link>
        <Link href="/PizzaBoxScene">Click to see the pizza scene</Link>
      </div>
    </div>
  );
}
