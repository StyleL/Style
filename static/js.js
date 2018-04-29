document.getElementById("menuBox").onclick=function(){slide()};

function slide(){
	var box1 = document.getElementById('navBox');
	var box2 = document.getElementById("menuBox");
	 if(box1.style.display=="none"){
            box1.style.display="block"; 
             box2.style.left="340px";
                             //显示
        }else{
            box1.style.display="none"; 
            box2.style.left='0px';                 //隐藏
       } 
	
}
	<!doctype html>
	<html>
	<head>
	<meta charset="utf-8">
	<title>打印测试</title>
	</head>

	<body>

	<div id="printDIV">function</div>

	<script type="text/javascript" language="javascript">
	var str = document.getElementById("printDIV").innerHTML;
	var printWin=window.open("打印窗口", "_blank");
	printWin.document.write(str );
	printWin.document.close();
	printWin.print();
	printWin.close();
</script>
</body>
</html>