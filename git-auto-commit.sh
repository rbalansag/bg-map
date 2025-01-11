#!/bin/bash

# Run git add .
git add .

# Ask for commit message
echo "Enter commit message: "
read commit_message

# Run git commit with the provided message
git commit -m "$commit_message"

# Run git push origin (push to the default branch)
git push origin $(git rev-parse --abbrev-ref HEAD)
