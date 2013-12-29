var doubleEntryNode = null;

function insertDoubleField( name, targetValue ){
	var sourceNode = $("#" + name );

	var parentNode = $( sourceNode ).parent();
	var superParent = $(parentNode).parent();

	var doubleEntryNode = $( "<div id=doubleEntryDiv ><input id=doubleEntryField name=doubleEntryField onkeyup=\"validateDuplicateField(event, this );\" type=text /></div>" );
	$(superParent).append( doubleEntryNode );

	$("#doubleEntryField").data( "targetValue", targetValue );

}

function validateDuplicateField(event, component ){
	var targetValue = $("#" + component.id).data("targetValue"); 
	if( targetValue == component.value ){
		$("#doubleEntryDiv").remove();
	}
}
