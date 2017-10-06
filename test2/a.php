<?php
	if ($_COOKIE['username']) {
		# code...
		echo "欢迎{$_COOKIE['username']}登录|<a href = 'delck.php'>退出</a>";
	} else {
		
		# code...
		header("location:index.php");

	}

  ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>测试</title>
	</head>
	<body>

	</body>
</html>
