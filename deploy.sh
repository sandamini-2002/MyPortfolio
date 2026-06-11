#!/usr/bin/env bash
# Simple deploy helper for Vercel (requires Vercel CLI)
# Usage: bash deploy.sh

if ! command -v vercel >/dev/null 2>&1; then
  echo "Vercel CLI not found. Install with: npm i -g vercel"
  exit 1
fi

if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "Initial portfolio"
fi

vercel login
vercel --prod
