#!/bin/bash

echo "Enter the directory name to check:"
read checkdir
if [ -d "$checkdir" ]; then
    echo "Directory '$checkdir' exists."
else
    echo "Directory '$checkdir' does not exist."
fi