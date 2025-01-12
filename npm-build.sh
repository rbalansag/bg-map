#!/bin/bash

# NPM Build and Publish Script
# ---------------------------
echo "Running npm build script..."

# Ask for version update
echo "Do you want to update the package version? (y/n)"
read update_version

if [ "$update_version" = "y" ]; then
    echo "Enter version type (patch, minor, major): "
    read version_type

    if [[ "$version_type" != "patch" && "$version_type" != "minor" && "$version_type" != "major" ]]; then
        echo "Invalid version type. Please enter 'patch', 'minor', or 'major'. Exiting."
        exit 1
    fi

    # Force update the npm version
    npm --force version $version_type
fi

# Ask about building
echo "Do you want to build the package? (y/n)"
read should_build

if [ "$should_build" = "y" ]; then
    npm run build
fi

# Ask about publishing
echo "Do you want to publish the package? (y/n)"
read should_publish

if [ "$should_publish" = "y" ]; then
    npm publish
    echo "NPM package has been published successfully!"
fi

echo "NPM operations completed!"
