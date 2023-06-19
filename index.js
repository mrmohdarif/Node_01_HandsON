let http=require('http')

let server=http.createServer((req,res)=>{
// request have three method
// req.url,
// req.method
// req.headers
const url=req.url;
if(url==='/')
{
    // res.write("<html>")
    res.write("<head><title>Hi !! i am mohd arif how are u javascript</title></head>")
    res.write("<body><h1>Node JS!!</h1><p>NodeJS is the runtime environment, which can execute the javascript code on any platform. It is widely used to create and run web application servers because of its salient features. During production, several times we need to send the resources or some type of information as a response, and javascript object notation (JSON) syntax is widely used to send data also it is used for communication between any two applications. In this article, we are going to see how we can send information to the user as JSON through a node.js server. NodeJS contains an inbuilt HTTP module, it is used to transfer data over the HTTP protocol and supports many features that are useful for any web application.</p></body>")
    // res.write("</html>")
    return res.end()
}
if(url==='/login')
{
    res.write("<html>")
    res.write("<head><title>Hi !! i am mohd arif how are u javascript</title></head>")
    res.write("<body>")
    res.write("<h2>Create a route using http module and explain what is node by sending response in HTML and JSON format</h2>") 

    res.write("</body>")
    res.write("</html>")

    return res.end()
 
}

res.write("default wrong url")
return res.end()

})



server.listen(8000)