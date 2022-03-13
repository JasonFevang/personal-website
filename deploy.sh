#!/bin/bash

# Change directory to the script's directory
# This command doesn't always work, but it works for the cases that I use it
cd $(dirname "$0")

# Run a custom script on my system to load node.js and gatsby
source load_nvm

# Build the gatsby site
gatsby clean
gatsby build

# Verify it built correctly?

# Copy the built site to my vps host
# TODO: Also doesn't work, copying the public directory changes the owner. I need to copy the contents of the directory
rsync -avz --delete public jason@fevang.ca:/home/jason/gatsby/my-gatsby-site

# Reload nginx on the remote server
# Didn't work, got the following error:
# TODO: Allow interactive authentication with nginx
  # Failed to reload nginx.service: Interactive authentication required.
  # See system logs and 'systemctl status nginx.service' for details.
systemctl --host jason@fevang.ca reload nginx
