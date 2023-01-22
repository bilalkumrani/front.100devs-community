# How to contribute


## Contributing procedure

### Submit an issue

- Create a [new issue](https://github.com/bilalkumrani/front.100devs-community/issues) 
- Comment on the issue (if you'd like to be assigned to it) - that way the issue can be assigned to you.

### Open issues

- Go to [open issues](https://github.com/bilalkumrani/front.100devs-community//issues)
- select an issue of your choice that is `open` or `need help` or is `up-for-grabs` and is not assigned.
- Comment on the issue (if you'd like to be assigned to it) - that way the issue can be assigned to you.

### Fork the repository (repo)

- If you're not sure, here's how to [fork the repo](https://help.github.com/en/articles/fork-a-repo)

### Set up your local environment (optional)

If you're ready to contribute and create your PR, it will help to set up a local environment so you can see your changes.

1. Set up your development environment

   - install your favorite text editor/IDE
   - install [Nodejs](nodejs.org)

   <br>

2. Clone your fork

If this is your first time forking our repo, this is all you need to do for this step:


Make sure you checkout the `develop` branch `git checkout main`

If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts.

To [configure your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/configuring-a-remote-for-a-fork):

```
$ git remote add upstream https://github.com/bilalkumrani/api.100devs-community.git
```

To [sync your fork with the latest changes](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork):

```
$ git checkout main
$ git fetch upstream
$ git merge upstream/main
```

3. Install dependencies

```
$ yarn install
```

or

```
$ npm install
```

<br>

### Make awesome changes!

<br>

1. Create new branch for your changes

```
$ git checkout -b new_branch_name
```

2. start development server


```
npm start
```

or

```
yarn start
```


<br>

### Start developing!

<br>

- Open this directory in your favorite text editor / IDE, and see your changes live by visiting `localhost:4000` from your browser
- Pro Tip: Explore scripts within `package.json` for more build options

1. Commit and prepare for pull request (PR). In your PR commit message, reference the issue it resolves (see [how to link a commit message to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).

```
$ git commit -m "brief description of changes [Fixes #1234]"
```

4. Push to your GitHub account

```
$ git push
```

### Submit your Pull Request (PR)🚀

- After your changes are commited to your GitHub fork, submit a pull request (PR) to the `main` branch of the `api.100devs-community` repo
- In your PR description, reference the issue it resolves (see [linking a pull request to an issue using a keyword](https://docs.github.com/en/free-pro-team@latest/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword))
  - ex. `Updates out of date content [Fixes #1234]`