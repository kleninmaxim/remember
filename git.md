# GIT

### Git version
```shell
git --version
```

### Show config of your git
```shell
git config
```

### Set global config
```shell
git config --global user.name = 'Klenin Maksim';
git config --global user.email = 'maksim_klenin_99@mail.ru';
```

### Create a new git repository
```shell
git init
```

### Add all files
```shell
git add .
```

### Add all files
```shell
git commit -m "Commit"
```

### Show history of commits
```shell
git log
```

### Get status of changed files
```shell
git status
```

### Get what exactly changed
```shell
git diff
```

### Remove all local changes and get code that have into HEAD commit
```shell
git reset --hard HEAD
```

### Show what exactly changed
```shell
git show aa380fa8cc89695a3921114efc4dcde92ee09284
```

### Create and checkout to new branch
```shell
git checkout -b new-user-feature
git checkout -b new-user-fix-bug
```

### Merge `new-user-feature` branch to current branch
```shell
git merge new-user-feature
```

### Delete branch
```shell
git branch -d new-user-feature
```

### Reset
* Note: use `reset` if you do not want to push into github
```shell
git reset
```

### Git Stash, you can save your local changes. Save all changes
```shell
git stash
```

### Git Stash, list of your changes
```shell
git stash list
```

### Git Stash, return all changes
```shell
git stash apply
git stash apply stash@{0}
```

### Git Stash, drop stashes
```shell
git stash drop
```

### Push changes from GitHub
```shell
git pull
```

### Delete branch local and remotely
```shell
git branch -d <branch-name>
git push origin :<branch-name>
```

### Add alias and remove alias to git
```shell
git config --global alias.s status
git s
git config --global --unset alias.s
```

### My aliases on ubuntu
```shell
alias ga="git add ."
alias gcom="git commit -m"
alias gb="git branch"
alias gc="git checkout"
alias gs="git status"
alias gp="git push"
alias grhh="git reset --hard HEAD"
```
