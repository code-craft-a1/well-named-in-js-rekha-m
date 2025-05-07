export const MajorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
export const MinorColorNames = [
	"BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];
export const allColorPairs = MajorColorNames.flatMap(majorColor =>
    MinorColorNames.map(minorColor => ({ majorColor, minorColor }))
);