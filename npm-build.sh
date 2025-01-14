#!/bin/bash

# NPM Build and Publish Script
# ---------------------------
echo "Running npm build script..."

echo "Enter version type (patch, minor, major): "
read version_type

if [[ "$version_type" != "patch" && "$version_type" != "minor" && "$version_type" != "major" ]]; then
    echo "Invalid version type. Please enter 'patch', 'minor', or 'major'. Exiting."
    exit 1
fi

# Force update the npm version
npm --force version $version_type

# Build
npm run build

# Remove assets from dist folder if they exist
rm -rf dist/assets

# Publish
npm publish

echo "NPM package has been updated, built, and published successfully!"
