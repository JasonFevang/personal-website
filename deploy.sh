#!/bin/bash

# Change directory to the script's directory
# This command doesn't always work, but it works for the cases that I use it
cd $(dirname "$0")

# Run a custom script on my system to load node.js and gatsby
source load_nvm

# Build the gatsby site
gatsby build

# Verify it built correctly?

# Copy the built site to my vps host
rsync -avz --delete public jason@fevang.ca:/home/jason/gatsby/my-gatsby-site
