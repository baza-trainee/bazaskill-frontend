#!/bin/sh

echo "Running lint-staged..."
pnpm lint-staged
RESULT=$?

if [ $RESULT -ne 0 ]; then
  echo "\n🚨 Linting or formatting failed!"
  echo "💡 Please fix the issues before committing your changes."
  exit 1
else
  echo "✅ Linting and formatting checks passed!"
fi