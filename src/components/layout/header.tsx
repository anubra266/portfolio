"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { css, cx } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { button, link } from "styled-system/recipes";
import Link from "next/link";

import { ThemeToggle } from "~/components/layout/theme-toggle";
import { BLinkingEye } from "~/components/layout/blinking-eye";
import { MobileNavbar } from "~/components/layout/mobile-navbar";
import { FaGithub } from "react-icons/fa";

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <nav
      className={flex({
        align: "center",
        justify: "space-between",
        mt: { base: "6", lg: "[60px]" },
        pb: "1",
        px: "[var(--padding)]",
        maxW: "[var(--maxW)]",
        w: "full",
        position: "sticky",
        top: "0",
        backdropFilter: "[blur(16px)]",
        bg: "bg.canvas/70",
        zIndex: "[9999]",
        rounded: "xl",
        transition: "[all 0.2s ease-in-out]",
      })}
    >
      <div
        className={css({
          flex: "1",
        })}
      >
        <Link href="/">
          <Image
            alt="Handsome Abraham 😉"
            src="https://avatars.githubusercontent.com/u/30869823?s=512&v=4"
            width={40}
            height={40}
            className={css({
              borderRadius: "full",
              borderStyle: "solid",
              borderWidth: "[4px]",
              borderColor: "[fg.default/70]",
              p: "[1.5px]",
            })}
          />
        </Link>
      </div>

      <div
        className={flex({
          hideBelow: "md",
          align: "center",
          justify: "center",
          flex: "1",
        })}
      >
        <ul className={flex({ align: "center", gap: "4" })}>
          {ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                // target={route.external ? "_blank" : undefined}
                data-active={isActive(route.href) ? "" : undefined}
                href={route.href}
                className={flex({
                  align: "center",
                  gap: "2",
                  px: "6",
                  py: "3",
                  pos: "relative",
                  whiteSpace: "nowrap",
                  color: {
                    base: "[fg.default/60]",
                    _active: "fg.default",
                  },
                  _after: {
                    pos: "absolute",
                    content: '""',
                    bottom: "-1",
                    left: "[50%]",
                    transform: "translateX(-50%)",
                    display: "block",
                    height: "1",
                    width: "2",
                    rounded: "full",
                    transition: "[all ease 0.2s]",
                  },
                  _active: {
                    bg: { _after: "fg.default" },
                  },
                  _hover: {
                    bg: { _after: "fg.default" },
                  },
                })}
              >
                {/* //TODO: should not show on resume page */}
                {route.label === "Resume" && <BLinkingEye />}
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={flex({
          align: "center",
          gap: "4",
          justify: "end",
          flex: "1",
        })}
      >
        <a
          href="https://x.com/anubra266"
          target="_blank"
          className={cx(link(), css({ hideBelow: "md" }))}
        >
          @anubra266
        </a>
        <div
          className={flex({
            align: "center",
            gap: "1",
          })}
        >
          <a
            href="https://releases.anubra266.dev/"
            target="_blank"
            className={cx(
              button({
                variant: "secondary",
              }),
              css({
                cursor: "pointer",
                w: "8",
                h: "8",
                p: "1.5",
              })
            )}
          >
            <FaGithub />
          </a>

          <ThemeToggle />
        </div>

        <MobileNavbar />
      </div>
    </nav>
  );
}

export const ROUTES = [
  {
    href: "/",
    label: "Work",
  },
  {
    href: "/about",
    label: "About",
  },
  // {
  //   href: "/resume",
  //   label: "Resume",
  //   external: true,
  // },
  {
    href: "/posts",
    label: "Blog",
  },
];
