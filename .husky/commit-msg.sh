#!/bin/sh

echo "Checking your commit message format..."

pnpm dlx commitlint --edit "$1"

RESULT=$?

if [ $RESULT -ne 0 ]; then
  echo "\n🚨 Commit message does not meet the required format!"
  echo "💡 Please follow the Conventional Commits format:"
  echo "   Example: feat: add new feature"
  echo "   More info: https://www.conventionalcommits.org/en/v1.0.0/"
  exit 1
else
  echo "✅ Commit message is valid!"
fi