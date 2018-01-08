var a = prompt("Wprowadź zmienną 'a'");
var h = prompt("Wprowadź zmienną 'h'");

	function getTriangleArea(a, h) {
		if ((a<=0) || (h<=0)) {
			alert("Nieprawidłowe dane");
			console.log("Nieprawidłowe dane");
		} else {
			return (a*h/2);
		}
	}
console.log(getTriangleArea(a, h));	
var triangle1Area = console.log(getTriangleArea(10, 6));
var triangle2Area = console.log(getTriangleArea(1, 2));
var triangle3Area = console.log(getTriangleArea(2, 2));
