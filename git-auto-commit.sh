#!/bin/bash

# Part 1: Auto-commit script
# --------------------------
echo "Running auto-commit script..."

# Add all changes to git
git add .

# Ask for a commit message
echo "Enter commit message: "
read commit_message

# Ensure the commit message isn't empty
if [ -z "$commit_message" ]; then
    echo "Commit message cannot be empty. Aborting."
    exit 1
fi

# Commit the changes with the entered message
git commit -m "$commit_message"

# Push to the current branch on the remote
git push origin $(git rev-parse --abbrev-ref HEAD)

# Ask if user wants to run npm build script
echo "Do you want to run npm build operations? (y/n)"
read run_npm_build

if [ "$run_npm_build" = "y" ]; then
    ./npm-build.sh
else
    echo "Skipping npm build operations. Exiting."
fi
