#!/bin/sh
VERSION='';
re="\"(version)\": \"([^\"]*)\"";

while read -r l; do
    if [[ $l =~ $re ]]; then
        value="${BASH_REMATCH[2]}";
        VERSION="$value";
    fi
done < package.json;

# Publish package
npm publish --access public
echo "Publish finished!";

# Commit new version
git add --a
git commit -m"[RELEASE] auto release v$VERSION"
git push origin develop
echo "Commit new version completed!"

# Versioning
git tag v$VERSION
git push origin --tag
echo "Commit new tag completed!"

read -n1 -r -p "Press space to continue..." key
