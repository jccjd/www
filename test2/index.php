<?php
	$username = "user1";
	setcookie("username", $username,0,"/");
	echo "欢迎{$_COOKIE['username']}登录";
 ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title></title>
	</head>
	<body>

	</body>
</html>
