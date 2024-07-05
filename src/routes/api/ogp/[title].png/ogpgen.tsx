import satori from "satori";
import sharp from "sharp";
import { read } from "$app/server";
import NotoSansJP from "./NotoSansJP.ttf";
import type { ReactNode } from "react";

const element: ReactNode = (
	<div
		style={{
			height: "100%",
			width: "100%",
			display: "flex",
			justifyContent: "space-between",
			flexDirection: "column",
			backgroundColor: "rgb(55,65,81)",
			fontWeight: 600,
			padding: 48,
			border: "48px solid rgb(31,41,55)",
		}}>
		<div style={{ color: "#fff", fontSize: 64, maxWidth: 1000 }}>{title}</div>
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<div style={{ color: "#d1d5db", fontSize: 48, display: "flex", alignItems: "center" }}>
				<img
					src="https://avatars.githubusercontent.com/u/100062175"
					width={48}
					height={48}
					style={{ borderRadius: 9999, marginRight: 24 }}
				/>
				monax-owo
			</div>
		</div>
	</div>
);
export const generateOgpImage = async (title: string): Promise<Buffer> => {
	const font = read(NotoSansJP);
	const svg = await satori(element, {
		width: 1200,
		height: 630,
		fonts: [
			{
				name: "Noto Sans JP",
				data: await font.arrayBuffer(),
				style: "normal",
			},
		],
	});

	// SVG から PNG 形式に変換する
	const png = await sharp(Buffer.from(svg)).png().toBuffer();

	return png;
};