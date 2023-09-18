export let target: HTMLElement | null = null,
	isMouseDown: boolean = false,
	offset: number[] = [0, 0];

export const { innerWidth, innerHeight } = window;

export function random(min: number, max:number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mouseDown(el: HTMLElement) {
	return function (event: Event) {
		el.style.zIndex = String(getHighestZIndex() + 1);
	};
}

export function titleMouseDown(e: Event) {
	isMouseDown = true;
	target = (e.target as HTMLElement).parentNode
		? ((e.target as HTMLElement).parentNode as HTMLElement)
		: null;
	offset = [
		(target?.offsetLeft || 0) - eventClientX(e),
		(target?.offsetTop || 0) - eventClientY(e),
	];
}

export function mouseUp(e: Event) {
	isMouseDown = false;
	offset = [0, 0];
	target = null;
}