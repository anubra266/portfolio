import Link from "next/link";
import { css, cx } from "styled-system/css";
import { center, flex, linkOverlay, stack } from "styled-system/patterns";
import { tag, text } from "styled-system/recipes";
import DateFormatter from "~/components/global/date-formatter";
import type { Post } from "~/lib/api";

export function PostCard({ post }: { post: Post }) {
  return (
    <div
      className={cx(
        "group",
        stack({
          pos: "relative",
          bg: {
            base: "white/50",
            _dark: {
              base: "hsl(0 0% 12.9% / .5)",
              _hover: "hsl(0 0% 12.9% / .7)",
            },
          },
          rounded: "[32px]",
          p: "6",
          _light: { _hover: { boxShadow: "03" } },
          transition: "[all 0.3s ease]",
          h: "full",
        })
      )}
    >
      <div
        className={center({
          bg: "bg.circle",
          maxH: "[352px]",
          w: "full",
          rounded: "[32px]",
          backdropFilter: "[blur(150)]",
          _groupHover: { transform: "scaleX(1.05) scaleY(1.05)" },
          transition: "[all 0.15s ease]",
        })}
      >
        <img
          src={post.coverImage}
          alt={post.title}
          className={css({
            rounded: "[32px]",
            h: "full",
          })}
        />
      </div>

      <div
        className={stack({
          gap: "4",
          mt: "5",
        })}
      >
        <Link
          as={`/posts/${post.slug}`}
          href="/posts/[slug]"
          className={cx(
            text({ variant: "24" }),
            linkOverlay({
              fontWeight: "medium",
            })
          )}
        >
          <span
            className={css({
              bgGradient: "to-r",
              gradientFrom: "brand.primary/40",
              gradientTo: "brand.secondary/46",
              bgSize: "0px 10px",
              bgPosition: "left bottom",
              bgRepeat: "no-repeat",
              transition: "[background-size 500ms]",
              _hover: {
                bgSize: "100% 3px",
              },
              _groupHover: {
                bgSize: "100% 10px",
              },
              _dark: {
                gradientFrom: "grey.03/70",
                gradientTo: "grey.04/65",
              },
            })}
          >
            {post.title}
          </span>
        </Link>
        <div
          className={text({
            variant: "17",
          })}
        >
          <DateFormatter dateString={post.date} />
        </div>
        <p className={cx(text({ variant: "17" }), css({ color: "fg.subtle" }))}>
          {post.excerpt}
        </p>
        <div className={flex({ gap: "2" })}>
          {post.tags.map((t, i) => (
            <span key={i} className={tag()}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
