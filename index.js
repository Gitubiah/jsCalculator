let result = getDocumentById("result");

function getResult(value) {
    if(value==="="){
        result.value = eval(result.value)
    } else {
        result.val += value;
    }
}
function clearResult(){
    result.value ="";
}