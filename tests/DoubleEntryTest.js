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

