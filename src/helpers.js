export const FixNameAbbrev = (firstName, lastName) => {
	const firstLet = firstName[0];
	const secondLet = lastName[0];
	return firstLet.concat(secondLet);
};

export const colorCode = () => {
	let a,
		b,
		c = 0;

	let colorCodeBG, colorCodeText;

	a = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	c = Math.floor(Math.random() * 256);

	colorCodeBG = `rgba(${a}, ${b}, ${c})`;
	if (a + b + c > 450) {
		colorCodeText = `var(--color-blog)`;
	} else {
		colorCodeText = `white`;
	}

	return {
		colorCodeBG,
		colorCodeText,
	};
};

export const extractParams = (location) => {
	const cut = location.pathname.split('/')[1]
	return cut
}