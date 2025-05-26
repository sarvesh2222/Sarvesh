#!/bin/bash

# Add all changes
git add .

# Get the current date and time
timestamp=$(date "+%Y-%m-%d %H:%M:%S")

# Commit with timestamp
git commit -m "Update: $timestamp"

# Push to GitHub
git push origin main

echo "Changes pushed to GitHub successfully!" 