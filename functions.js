function add(var1, var2) {
	return var1+var2;
};
$myVariable = add(7,6);
console.log($myVariable);

function concatStrings(NumberOfSeats, NumberOfTicketsSold) {
	return NumberOfSeats - ' ' - NumberOfTicketsSold;
}

console.log(concatStrings('20', '14'))