const http=require("http")

http.createServer((req,res)=>{
	res.write("keep smile")
	res.end()
}).listen(2022)