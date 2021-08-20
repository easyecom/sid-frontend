import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const LogoCabecalho = () => {
  return (
    <div className="">
      <Link href="/">
        <img
          onClick={() => window.location.href = "/"}
          src="/static/logo.png"
          className="logo"
          width="70%"
        />
      </Link>
    </div>
  );
};

export default LogoCabecalho;
