function isIsogram(str){

	arrString = str.split("");
	count = 0;

	for (let i = 0; i < arrString.length; i++) {

		for (let o = 0; o < arrString.length; o++) {

			if (i === o) continue;

			count = (arrString[i].toLowerCase() === arrString[o].toLowerCase()) ? (count + 1) : count;

		}

	}

	if (count != 0) return false;

	return true

}

function isIsogram(str) {
  const lowerStr = str.toLowerCase();
  const uniqueChars = new Set(lowerStr);
  return uniqueChars.size === lowerStr.length;
}

const func = isIsogram("aba");

console.log(func);