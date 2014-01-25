module("DoubleEntry");
 
test("validate Node created", function() {
	var sourceValue = "12345";
	insertDoubleField( "name\\.lastName", sourceValue );	
	var initChildrenCount = $("#superParent" ).children().length;
	equal( initChildrenCount, 3,  "Incorrect divs inserted. No insert double" );
	notEqual( sourceValue, $("doubleEntryField").data("targetValue"), "Target Value not set" );
	
	// replicate the onkeydown event
	$("#doubleEntryField").val( sourceValue );
	$("#doubleEntryField").keyup();
	initChildrenCount = $("#superParent" ).children().length;
	equal( initChildrenCount, 2,  "double entry field should have been removed" );
});

test( "using mockito and jshamcrest library", function(){
	equal( true, true );

	getName = mockFunction();
	//when( getName )().then( function(){ return "From a mock!"; } );

	when( getName )().then( function(){ return "This is a number !"; } );

	executeLogic();
	verify( getName )( 2 );
	verify( getName )( 1 );
	assertThat( "x", equalTo( "x" ) );

});

