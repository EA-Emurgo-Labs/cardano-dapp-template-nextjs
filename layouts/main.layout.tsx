import { useEffect, PropsWithChildren } from "react";
import { theme } from "antd";
import { Siderbar } from "@/components/siderbar.component";
import { useProfileManager } from "@/hooks/account.hook";
import { useRouter } from "next/navigation";

const { useToken } = theme;

export const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  const { token } = useToken();
  const [profile] = useProfileManager();
  const router = useRouter();

  useEffect(() => {
    if (!profile.email) {
      return router.push("/signin");
    }
  }, [profile]);
  return (
    <div className="flex w-full">
      <Siderbar />
      <div
        className="min-h-screen pl-12 py-14 pr-32"
        style={{
          backgroundColor: token.colorBgLayout,
          width: "inherit",
          marginLeft: 256,
        }}
      >
        <div className="flex flex-col relative">{children}</div>
      </div>
    </div>
  );
};
