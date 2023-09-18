import { mouseDown, mouseUp, random, titleMouseDown } from "./util";

document.addEventListener("deviceready", ready, false);

function ready() {
	console.log("ready");
}



let moveable: NodeListOf<HTMLElement> = document.querySelectorAll(".moveable");

moveable.forEach((el) => {
	el.style.top = random(30, innerHeight - el.offsetHeight) + "px";
	el.style.left = random(5, innerWidth - el.offsetWidth) + "px";
	el.addEventListener("mousedown", mouseDown(el), true);
	el.addEventListener("touchstart", mouseDown(el), true);
	el.querySelector(".title-bar")?.addEventListener(
		"mousedown",
		titleMouseDown,
		true
	);
	el.querySelector(".title-bar")?.addEventListener(
		"touchstart",
		titleMouseDown,
		true
	);
});

document.addEventListener("mouseup", mouseUp, true);
document.addEventListener("touchend", mouseUp, true);
document.addEventListener("mousemove", mouseMove, true);
document.addEventListener("touchmove", mouseMove, { passive: false });





function mouseMove(e) {
	if (!isMouseDown) {
		return;
	}
	e.preventDefault();
	target.style.left = eventClientX(e) + offset[0] + "px";
	target.style.top = eventClientY(e) + offset[1] + "px";
}

function getHighestZIndex() {
	let highest = 0;
	document.querySelectorAll(".moveable").forEach((el) => {
		const zIndex = parseInt(el.style.zIndex);
		if (zIndex > highest) {
			highest = zIndex;
		}
	});
	return highest;
}

function eventClientX(e) {
	return e.clientX || e.touches[0].clientX;
}

function eventClientY(e) {
	return e.clientY || e.touches[0].clientY;
}
