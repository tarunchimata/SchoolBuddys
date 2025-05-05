#!/bin/bash
# delete_tags.sh
# Description: Delete all Git tags containing 'dev' or 'prod'.

# Fetch all tags
echo "Fetching all tags..."
git fetch --tags

# Find and delete tags containing 'dev' or 'prod'
for tag in $(git tag | grep -E 'dev|prod'); do
    echo "Deleting tag: $tag"
    git tag -d "$tag"  # Delete the tag locally
    git push --delete origin "$tag"  # Delete the tag remotely
done

echo "Finished deleting tags."

