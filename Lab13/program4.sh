#!/bin/bash

echo "Enter the directory to list files:"
read listdir
if [ -d "$listdir" ]; then
    echo "Files in '$listdir':"
    ls "$listdir"
else
    echo "Directory '$listdir' does not exist."
fi