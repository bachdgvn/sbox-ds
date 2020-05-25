#!/bin/sh
VERSION='';
re="\"(version)\": \"([^\"]*)\"";

while read -r l; do
    if [[ $l =~ $re ]]; then
        value="${BASH_REMATCH[2]}";
        VERSION="$value";
    fi
done < package.json;

# Versioning
git tag v$VERSION
git push origin --tag

# Publish package
npm publish --access public

echo "Publish finished!";
read -n1 -r -p "Press space to continue..." key
