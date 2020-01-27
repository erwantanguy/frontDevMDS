var dialog = document.querySlector('dialog');
document.querySelector('#show').onclick = function() {
    dialog.show();
};
document.querySelector('#close').onclick = function(){
	var val = document.querySelector('#retour').value;
	dialog.close(val);
};
document.querySelector('dialog').addEventListener('close',function(){
	alert(this.returnValue);
});