var add=document.getElementById('add');
var task=document.getElementById('task');
var list=document.getElementById('list');
add.addEventListener('click', function(){
 var text=task.value.trim();
 if(text===''){
  return null;
 }
 var li=document.createElement('li');
 li.textContent=text;
li.addEventListener('click',function(){
li.classList.toggle('done');
});
list.appendChild(li);
task.value='';
});
