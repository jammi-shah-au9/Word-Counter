var displayed=[];
var counter=0;
var attachment=1;
$('.fa-clickable').click(function(){
  console.log("clicked")
  location.assign("https://github.com/jammi-shah-au9");
});
$('#confirm').click(function(){
var xyz=($('#txt').val());
var jj=xyz.split(' ');
console.log(jj);
var word = $('#txtbx').val();
if
(displayed.includes(word)){
console.log("this is " + word)
alert("Already checked");

}
else{
console.log(word);
for(let i=0;i<=jj.length;i++){
    if(jj[i]==word){
        counter=counter+1;
    }
}
displayed.push(word);
console.log(displayed);
if (attachment==1){
$('#attach').append(`<table class="table  table-bordered st">
<thead>
  <tr id="tl">
    <th scope="col">#</th>
    <th scope="col">Word</th>
    <th scope="col">Occurence</th>
  </tr>
</thead>
<tbody class="lin">
  <tr>
<td>${attachment}</td>
<td>${word}</td>
<td>${counter}</td>
  </tr>
</tbody>
</table>`);
counter=0;
attachment++;
}
else{
  
    $('.lin').append(`<tr>
    <td>${attachment}</t>
    <td>${word}</td>
    <td>${counter}</td>
      </tr>
      </tr>`);
attachment++;
counter=0;
}
}
})
