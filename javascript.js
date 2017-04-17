<!DOCTYPE html>
<html xmlns="https://ivorycry.github.io/">
<head>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">
$(document).ready(function()
{
	$(".main_body").hide();
	$(".main_body").click(function()
	{
		$(this).next(".main_body").slideToggle(600);
	});
});
</script>
</head>
<body>
</body>
</html>