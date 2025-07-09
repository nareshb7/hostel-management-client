"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function useProtectedRoute(requireAuth: boolean = true) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (requireAuth && !user) {
      router.push("/login");
    }
    if (!requireAuth && user) {
      router.push("/dashboard");
    }
  }, [user, requireAuth]);
}
