$(document).ready(()=>{

$("form").submit(function(e){
    e.preventDefault()
    const inputTask=$("#tasks").val()
    const newTask=$(`<li></li>`)
    if(inputTask===""){
        alert("Inserir uma tarefa")
    }else{
    $(`<p>${inputTask}</p>`).appendTo(newTask)
    $(newTask).appendTo(`ul`)}
    $("#tasks").val("")
})

$('ul').click(function(event){
    $(event.target).toggleClass("check")
})

})