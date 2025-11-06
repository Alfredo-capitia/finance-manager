"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function SignedInPage() {
  const router = useRouter();
  const { isLoaded, isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.push("/pages/dashboard");
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) return <div>Loading...</div>;

  return <div>Redirecting to dashboard...</div>;
}
