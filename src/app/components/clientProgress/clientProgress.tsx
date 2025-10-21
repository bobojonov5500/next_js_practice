"use client";

import { useEffect } from "react";
import NProgress from "nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import "nprogress/nprogress.css";

export default function ClientProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname, searchParams]);

  return null;
}
