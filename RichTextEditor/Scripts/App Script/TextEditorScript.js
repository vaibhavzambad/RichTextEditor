var oDoc,sDefText;

function initDoc(){
    oDoc = document.getElementById('textEditor');
    sDefText = oDoc.innerHTML;
    if(document.compForm.switchMode.checked){ 
        setDocMode(true);
    }
}

function formatDoc(sCmd,sValue){
    if(validateMode()){
        document.execCommand(sCmd,false,sValue);
        oDoc.focus();
    }
}

function validateMode(){
    if(!document.compForm.switchMode.checked){
        return true;
    }
    alert("Uncheck \"Show HTML\".");
    oDoc.focus();
    return false;
}

function setDocMode(bToSource){
    var oContent;
    if(bToSource){
        oContent = document.createTextNode(oDoc.innerHTML);
        oDoc.innerHTML = "";
        var oPre = document.createElement("pre");
        oDoc.contentEditable = false;
        oPre.id = "sourceText";
        oPre.contentEditable = true;
        oPre.appendChild(oContent);
        oDoc.appendChild(oPre);
        document.execCommand("defaultParagraphSeperator",false,"div");
    }else{
        if(document.all){
            oDoc.innerHTML = oDoc.innerHTML;
        }else{
            oContent = document.createRange();
            oContent.selectNodeContents(oDoc.firstChild);
            oDoc.innerHTML = oContent.toString();
        }
        oDoc.contentEditable = true;
    }
    oDoc.focus();
}