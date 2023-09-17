import { PropsWithChildren } from "react";
import Image from "next/image";
import AuthStyles from "styles/auth.module.scss";
import Logo from "assets/logo.png";
import clsx from "clsx";

export const AuthLayout = ({ children, title }: PropsWithChildren<{}>) => {
  return (
      <main
        className={clsx([
          "flex justify-center items-center flex-col",
          AuthStyles.wrapper,
        ])}
      >
        <Image src={Logo} alt="Logo" />
        <div className={clsx(["text-center", AuthStyles.title])}>{title}</div>
        <div
          className="w-full flex flex-col justify-center items-center"
          style={{ maxWidth: 456 }}
        >
          {children}
        </div>
      </main>
  );
};
