"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import splitbee from "@splitbee/web";

export function Providers({ children }: React.ComponentProps<"div">) {
  useEffect(() => {
    splitbee.init();
  }, []);

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
