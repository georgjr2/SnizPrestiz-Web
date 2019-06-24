import { GraphImageParser } from "./GraphImageParser";
import { GraphData } from "../GraphData";

export class GraphUrlParser{
	public static GetGraphData(url: string, callback: (data: GraphData) => void): void{
		let image = new Image();
		image.onload = (): void => callback(GraphImageParser.GetGraphData(image));
		image.onerror = (): void => callback(null);
		image.crossOrigin = `use-credentials`;
		image.src = url;
	}
}