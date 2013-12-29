module("DoubleEntry");
 
test("validate Node created", function() {
	var sourceValue = "12345";
	insertDoubleField( "oneField1", sourceValue );	
	var initChildrenCount = $("#oneParentDiv div" ).children().length;
	equal( initChildrenCount, 3,  "incorrect children count" );
	notEqual( sourceValue, $("doubleEntryField").data("targetValue"), "Target Value not set" );
	
	// replicate the onkeydown event
	$("#doubleEntryField").val( sourceValue );
	$("#doubleEntryField").keyup();
	var initChildrenCount = $("#oneParentDiv div" ).children().length;
	equal( initChildrenCount, 2,  "double entry field should have been removed" );

});

