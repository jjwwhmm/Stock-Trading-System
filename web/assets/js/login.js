/**
 * Designed by Shengze Wei in Chongqing Coded in Fuling Copyright 2014 Shengze
 * Wei. All rights reserved.
 */
function check() {
	var userid = document.getElementById("userid").value;
	var password = document.getElementById("password").value;
	var rand = document.getElementById("rand").value;
	if (userid.length == 0) {
		alert("�������˺ţ�");
		return false;
	}
	if (password.length == 0) {
		alert("���������룡");
		return false;
	}
	if (rand.length == 0) {
		alert("��������֤�룡");
		return false;
	}
}