import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "nowrap",
          backgroundColor: "#2A2A2A",
          color: "#FFF",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/30869823?s=96&v=4"
          height={100}
          width={100}
          style={{
            height: "100",
            width: "100",
            borderRadius: "50%",
            padding: 6,
            border: "solid 6px #FFF",
          }}
        />

        <div style={{ marginTop: 40, fontSize: 32, fontWeight: 600 }}>
          Abraham A. Aremu
        </div>
        <div style={{ marginTop: 10, fontSize: 18, fontWeight: 400 }}>
          Software Engineer and Open source Enthusiast
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 30,
            fontWeight: 400,
            display: "flex",
          }}
        >
          {"<"}🚀{"/>"}
        </div>
      </div>
    ),

    {
      width: 1200,
      height: 630,
    }
  );
}
