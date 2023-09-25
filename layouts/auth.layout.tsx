import { PropsWithChildren } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import AuthStyles from "styles/auth.module.scss";
import Logo from "assets/logo@2x.png";
import BgEllipse1 from "@/assets/auth-bg-ellipse-1.png";
import BgEllipse2 from "@/assets/auth-bg-ellipse-2.png";

export const AuthLayout = ({ children, title }: PropsWithChildren<{}>) => {
  return (
    <main
      className={clsx([
        "flex items-center flex-col relative min-h-screen px-4",
        AuthStyles.wrapper,
      ])}
    >
      <Image
        src={BgEllipse1}
        alt="background 1"
        className="absolute left-0 top-0"
      />
      <Image
        src={BgEllipse2}
        alt="background 2"
        className="absolute right-0 top-0"
      />
      <Link href="/" className="relative">
        <Image src={Logo} alt="Logo" width="229" />
      </Link>
      <div className={clsx(["text-center", AuthStyles.title])}>{title}</div>
      <div
        className="w-full flex flex-col justify-center items-center relative z-1000"
        style={{ maxWidth: 456 }}
      >
        {children}
      </div>
    </main>
  );
};
