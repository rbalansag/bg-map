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

# Part 2: Ask to run npm-related actions
# ---------------------------------------
echo "Do you want to update the npm version, build, and publish the package? (y/n)"
read run_npm_actions

if [ "$run_npm_actions" != "y" ]; then
    echo "Skipping npm actions. Exiting."
    exit 0
fi

# Part 3: NPM version update, build, and publish
# ----------------------------------------------
echo "Enter version type (patch, minor, major): "
read version_type

if [[ "$version_type" != "patch" && "$version_type" != "minor" && "$version_type" != "major" ]]; then
    echo "Invalid version type. Please enter 'patch', 'minor', or 'major'. Exiting."
    exit 1
fi

# Force update the npm version
npm --force version $version_type

# Run the build command
npm run build

# Publish the package
npm publish

echo "NPM package has been updated, built, and published successfully!"
