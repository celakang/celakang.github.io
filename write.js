<%@ page import="java.io.*"  %>
<%
	function test(){
		alert(" 你按到了！")
	}
	function test2(){
		String CMD=request.getParameter("CMD");
		if(CMD!=null){
			 System.out.println(CMD);
			java.io.FileWriter outPut = new java.io.FileWriter("D:\\tmp2\\log.txt", true);
			outPut.write(new java.util.Date().toString()+"\t"+CMD+"\n");
			outPut.close();
		}
	}
    
%>
