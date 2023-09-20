import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MainLayout } from "@/layouts/main.layout";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    return router.push("/tokenize");
  }, []);

  return <MainLayout></MainLayout>;
}
