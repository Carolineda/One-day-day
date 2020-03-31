  ## Git
为远程Git更名为origin
$ git remote add origin git@github.com:abcd/tmp.git

 添加指定文件到暂存区
$ git add [file1] [file2] ...

 删除工作区文件，并且将这次删除放入暂存区
$ git rm [file1] [file2] ...

 提交时显示所有diff信息
$ git commit -v

查看文件修改的具体内容
$ git diff

 拉取远程更改到本地仓库默认自动合并
$ git pull origin master

  列出所有分支
$ git branch

  新建一个分支，但是依然停留在当前分支
$ git branch [branch-name]

  切换到指定分支，并更新工作区
$ git checkout [branch-name]

 切换到上一个分支
$ git checkout -

  合并分支到当前分支
$ git merge [branch]

  删除分支
$ git branch -d [branch-name]
  查看分支合并图
$ git log --graph

 恢复暂存区的指定文件到工作区
$ git checkout [file]
 想撤销git add到暂存区了。已经到暂存区 撤销步骤
 git reset --hard + 版本号
 回退到上一个版本
 $ git reset --hard HEAD^
