var net = require('net');
var chatServer = net.createServer();
clientList = [];
chatServer.on('connection',function(client) {
  client.write('Hi!\n');

  clientList.push(client);

  client.on('data',function(data) {
    for(let i=0; i<clientList.length; i+=1){
      //把数据发送给所以客户端
      clientList[i].write(data);
    }
  })
})

chatServer.listen(21568);
