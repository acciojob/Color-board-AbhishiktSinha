//your JS code here. If required.
const container = document.querySelector(".container");

for(let i = 0; i < 32; i++) {
	for(let j = 0; j < 25; j++) {
		const square = document.createElement("div");
		square.classList.add("square");

		let colornum = Math.floor(Math.random()*5) + 1;
		square.classList.add(`color-${colornum}`);

		container.append(square);
	}
}