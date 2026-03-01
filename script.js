function generateLetter(){

let type=document.getElementById("type").value;
let name=document.getElementById("name").value;
let reason=document.getElementById("reason").value;

let output="";

if(type==="Leave Application"){
output=
"To,\nThe Manager\n\nSubject: Leave Application\n\nRespected Sir/Madam,\n\nI, "+name+
", request leave due to "+reason+
". Kindly grant me leave.\n\nThank you.\n\nYours sincerely,\n"+name;
}

else if(type==="Job Application"){
output=
"Dear Hiring Manager,\n\nMy name is "+name+
". I am applying for a job position. "+reason+
".\n\nSincerely,\n"+name;
}

else{
output=
"Subject: Complaint\n\nI, "+name+
", would like to complain about "+reason+
". Kindly resolve the issue.\n\nRegards,\n"+name;
}

document.getElementById("output").value=output;
}
