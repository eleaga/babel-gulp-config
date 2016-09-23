QUnit.test( "Testando a classe calc", function( assert ) {
	//set
	calc = new calc(2,3);

	//expect
	mult = calc.mult();

	//assert
	assert.ok( calc.mult() == '6', "Mult deve retornar 6 " );
});