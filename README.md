# Learn Webpack
## weboack模块化开发学习1:webpack基本核心概念理解，与安装webpack遇到的问题。
1. 首先你需要有node与npm，如果没有就先下一个吧。
2. 当前我的环境是mac系统，我先说一下我的问题吧，就是npm install -g webpack 之后，我现在是安装成功了。
不过我这个webpack -v 的时候出现的是bash:webpack command not found。
3. 解决也好解决，在终端中which node 找到我的node目录，在/usr/local/bin/node，一点点看，发现我的全局模块都安装在/bin目录夹，我就在local目录下新建了node_global,node_cache，并且执行
npm config set prefix "/usr/local/node_global"   
npm config set cache "/usr/local/node_cache"
4. 把我的全局模块都有个家以后，重新安装webpack，进入到webpack目录下，webpack -v 还是webpack command not found
5. 中途报了个错，大致就是我没有node_global的写权限，ls -l发现当前所有者是root，就把所有者改为自己，并且允许读写操作。
6. echo $PATH 没有npm的环境变量。就把/usr/local/node_global/bin写入到环境变量，具体写法这个可以自行百度，不同系统不一样，这个不是问题的难点。
7. 运行webpack -v就能够正常运行。

