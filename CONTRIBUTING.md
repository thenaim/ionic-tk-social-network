# Contributing to Ionic social starter

We would love for you to contribute to starter project and help make it even better than it is
today! As a contributor, here are the guidelines we would like you to follow:

## Getting started

Please check out one of the getting started guides about GitHub fork / pull requests workflow:

- [Forking project](https://guides.github.com/activities/forking/)
- [Fork a repo](https://help.github.com/articles/fork-a-repo/)
- [Forking](https://gist.github.com/Chaser324/ce0505fbed06b947d962)

## How to sync your fork

Your fork of the repo can fall behind as more work is done in the original repository.
It is always good idea to update your work before starting to work on new issue.
The fork can be updated by navigating to your fork directory and running the following command...

```
git checkout master --force && git fetch upstream && git merge upstream/master && git push
```

## Commit Message Guidelines

### Type

Commit types that will appear in changelog:

- **feat** - adding new feature
- **fix** - fixing bug (please use `fixes #<issue-number>` at the end of commit message)
- **perf** - changes to improve performance
- If there is **BREAKING CHANGE** text anywhere in the commit message, the commit will always appear in the changelog

Other types that will not appear in changelog:

- **docs** - changes in documentation
- **chore** - changes in build or other application unrelated changes
- **refactor** - changes to implementation without changes to functionality
- **test** - adding tests
- **style** - changes to codestyle (should be unnecessary since we use prettier)

### Examples

```
fix(polyfills): add missing imports, fixes #247
```

```
refactor(settings): reorder imports
```

```
test(todos): add dispatch filter action test, adjust existing tests
```

```
fix(app): rework main layout to prevent scrollbar issues, closes #221, closes #240
```

```
docs(readme): add logo, update meta assets
```

```
feat(settings): add runtime animations toggles
```

```
fix(animations): fix dynamic animations in prod build, fixes #71
```

```
chore(release): 1.0.1
```
