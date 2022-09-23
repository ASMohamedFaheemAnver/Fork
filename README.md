Yo Guys!, What If I told you "NodeJs can overcome CPU intense work by utilizing multi core processor!",
Don't you believe me?,

Here is a really simple and eye opening example which explain how u can use child_process module to reduce latency in server response.

Consider a client server scenario where a USER hitting a endpoint which has CPU intense work with 2000ms latency and the following up USERS hitting a normal endpoint which is like 20ms latency.

// problem.js

Guess what will happen? Following up requests after the CPU intense request have to wait at least 2s to be served right?, Do you think it's fair to let other users wait 2s just to serve a USER with 2s work load request?
Note : NodeJs is a single threaded.

There are lots of techniques to reduce this continuous request's latency,
Some of them are :

- Let server code utilize multi core CPU.
- Write server code using JAVA/KOTLIN or PYTHON or GO and deploy it into multi core CPU.
- Deploy the server code into better CPU.
- Load balance the requests (Eg. Nginx or Kubernetes with multiple pods).

In this article we will focus on Making NodeJs server server code utilize multi core CPU, Shall we?

// solution.js
