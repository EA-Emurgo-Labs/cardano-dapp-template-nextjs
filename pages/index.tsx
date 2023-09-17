import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainLayout } from "@/layouts/main.layout";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/tokenize");
  }, [router]);

  return <MainLayout></MainLayout>;
}
