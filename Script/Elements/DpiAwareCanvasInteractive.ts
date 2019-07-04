import { DpiAwareCanvas } from "./DpiAwareCanvas";
import { Point } from "../Types/Point";

export class DpiAwareCanvasInteractive extends DpiAwareCanvas{
	public MousePos: Point = {X: 0, Y: 0};
	public MouseHover: boolean = false;
	public MouseHoverTime: number = 0;

	public constructor() {
		super();

		this.Root.onmouseenter = (): void => this.MouseHoverEvent(true);
		this.Root.onmouseleave = (): void => this.MouseHoverEvent(false);
		
		this.Root.onmousemove = (e): void => this.MouseMoveEvent({
			X: e.offsetX,
			Y: e.offsetY
		});
	}

	protected MouseMoveEvent(position: Point): void{
		this.MousePos = position;
		this.Draw();
	}

	protected MouseHoverEvent(hovered: boolean): void{
		this.MouseHover = hovered;
		this.MouseHoverTime = Date.now();
		this.Draw();
	}
}