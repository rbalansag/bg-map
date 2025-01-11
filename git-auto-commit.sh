#!/bin/bash

# Add all changes to git
git add .

# Ask for commit message
echo "Enter commit message: "
read commit_message

# Check if the commit message is empty
if [ -z "$commit_message" ]; then
    echo "Commit message cannot be empty. Aborting."
    exit 1
fi

# Commit the changes with the entered message
git commit -m "$commit_message"

# Push to the current branch on the remote
git push origin $(git rev-parse --abbrev-ref HEAD)
