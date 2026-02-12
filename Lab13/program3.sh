#!/bin/bash

echo "Enter the directory name to create:"
read dirname
if [ -d "$dirname" ]; then
    echo "Directory '$dirname' already exists."
else
    mkdir "$dirname"
    echo "Directory '$dirname' created successfully."
fi