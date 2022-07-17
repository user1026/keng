# git和npm


## refusing to merge unrelated histories的解决方案（本地/远程）综合


如果git merge合并的时候出现refusing to merge unrelated histories的错误，原因是两个仓库不同而导致的，需要在后面加上--allow-unrelated-histories进行允许合并，即可解决问题<br>

如果还不能解决问题，就把本地的remote删除，重新git remote add添加远程仓库，再按上面的方法来，问题解决。