// app/page.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("users_layout::", user);
    router.push(user ? "/dashboard" : "/welcome");
  }, [user]);

  return null; // Optional loading spinner
}
