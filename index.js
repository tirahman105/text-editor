document.getElementById('bold').addEventListener('click', function(){
    console.log("b clicked");
    const myText = document.getElementById('my-text');
    myText.style.fontWeight = 'bold';
})
document.getElementById('text-left').addEventListener('click', function(){
    console.log("b clicked");
    const myText = document.getElementById('my-text');
    myText.style.textAlign = 'left';
})
document.getElementById('text-center').addEventListener('click', function(){
    console.log("b clicked");
    const myText = document.getElementById('my-text');
    myText.style.textAlign = 'center';
})