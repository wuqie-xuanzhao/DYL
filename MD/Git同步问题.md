# Git同步问题   

- 问题：用VScode同步Git仓库，十次有九次出现网络错误。   
- 解决：   
  1. 尝试使用Git Bash命令行：` git status` 和 ` git push origin [分支名] --force`；
  2. 解决不了，网络问题。   

     - 尝试关闭代理   
     - 尝试在config中关闭代理：   
       ```git   
       git config --global --unset http.proxy   
       git config --global --unset https.proxy   
       ```
  3. 最终解决：git默认不走VPN的通道，开了VPN无效；使用代理VPN的Port，如VPN的Port是5500，可以设置git的代理为 `http://127.0.0.1:5500` 或者 `https://127.0.0.1:5500`

# 参考资料   

[【GIT】使用Vscode同步git仓库，错误和解决方法记录_hint: waiting for your editor to close the file...-CSDN博客](https://blog.csdn.net/FAAAAAAAN/article/details/128971857)
