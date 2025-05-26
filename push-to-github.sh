#!/bin/bash

echo "Pushing changes to GitHub..."

# Add all changes
git add .

# Commit with a timestamp
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
git push origin main

echo "Done! Your changes are now on GitHub." 

git remote add origin https://github.com/sarvesh2222/Sarvesh.git 