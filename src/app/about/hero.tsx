import { css, cx } from "styled-system/css";
import { text } from "styled-system/recipes";
import { circle } from "styled-system/patterns";
import { HeroButton } from "./hero-button";
import { Blob4 } from "~/components/layout/blobs/blob4";

export function Hero() {
  return (
    <div
      className={css({
        pos: "relative",
        w: "full",
        overflowY: "hidden",
      })}
    >
      <div
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "[var(--padding)]",
          maxW: "[var(--maxW)]",
          w: "full",
          mx: "auto",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDir: "column",
            gap: "6",
            py: "44",
          })}
        >
          <p
            className={cx(
              text({ variant: "64" }),
              css({
                fontWeight: "semibold",
              })
            )}
          >
            Abraham Aremu
          </p>
          <p
            className={cx(
              text({ variant: "28" }),
              css({
                fontWeight: "medium",
                maxW: "[29.3125rem]",
              })
            )}
          >
            I'm a frontend engineer with a passion for building reliable,
            scalable, and tested software that meets industry standards. My
            focus extends beyond the code, as I care deeply about user
            experience, accessibility, and improving developer workflows.
          </p>
          <p
            className={cx(
              text({ variant: "17" }),
              css({
                color: "fg.subtle",
                maxW: "[27.125rem]",
                letterSpacing: "wider",
              })
            )}
          >
            I also believe in the power of <u>open source</u> collaboration to
            drive innovation and create solutions that matter.
          </p>

          <HeroButton />
        </div>
        <div
          className={circle({
            size: "[464px]",
            bg: "bg.circle",
            backdropFilter: "[blur(150)]",
            hideBelow: "lg",
          })}
        >
          <img
            src="/assets/images/hero_emoji-2.png"
            alt="hero emoji"
            className={css({
              h: "[88px]",
            })}
          />
        </div>
      </div>
      <Blob4
        css={{
          pos: "absolute",
          zIndex: "[-1]",
          bottom: "[-60%]",
          right: "-20",
          _dark: { display: "none" },
        }}
      />
    </div>
  );
}
