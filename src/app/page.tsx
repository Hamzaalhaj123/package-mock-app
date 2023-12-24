import { Experience } from "@/components/Experience";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div>
      <h1>hamza</h1>
      <Link href="/MugScene">Click to see the scene</Link>
      <Link href="/PizzaBoxScene">Click to see the pizza scene</Link>
    </div>
  );
}
