#!/bin/bash
# Build Practice Studio and push to the deploy repo — Hostinger's webhook
# then auto-deploys it to onealphamed.com/practice-studio/ (~30s).
set -euo pipefail
cd "$(dirname "$0")"
DEPLOY_REPO="/Users/abhishek/Desktop/AI Projects/HCP Websites/practice-studio-deploy"
MSG="${1:-Deploy $(date '+%Y-%m-%d %H:%M')}"

npm run build:studio
rsync -a --delete --exclude .git dist-practice-studio/ "$DEPLOY_REPO/"
cd "$DEPLOY_REPO"
git add -A
if git diff --cached --quiet; then
  echo "Nothing changed — already deployed."
else
  git commit -m "$MSG"
  git push
  echo "Pushed — Hostinger will pull it live in ~30s."
fi
