$(document).ready(function (){
    listar();
});
function listar(){
    $.get("post",function (data){
       alert(data);
    });
}