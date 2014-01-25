var doubleEntryNode = null;

function insertDoubleField( name, targetValue ){
	var sourceNode = $("#" + name );

	var parentNode = $( sourceNode ).parent();
	var superParent = $(parentNode).parent();

	var doubleEntryNode = $( "<div id=doubleEntryDiv ><input id=doubleEntryField name=doubleEntryField onkeyup=\"validateDuplicateField(event, this );\" type=text /></div>" );
	$(superParent).append( doubleEntryNode );
	var name = getName();
	$("#doubleEntryField").data( "targetValue", targetValue );
}

function validateDuplicateField(event, component ){
	var targetValue = $("#" + component.id).data("targetValue"); 
	var name = getName();
	if( targetValue == component.value ){
		$("#doubleEntryDiv").remove();
	}
}

function executeLogic(){
	var aName = getName();
	console.log( aName );
	var anotherName = getName( 1 );
	anotherName = getName( 2 );
	console.log( aName );
}


function getName(){
	return "this is the name";
}

