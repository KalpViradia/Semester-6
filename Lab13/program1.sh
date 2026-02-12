#!/bin/bash

echo "Enter the filename to check if it exists:"
read filename
if [ -f "$filename" ]; then
    echo "File '$filename' exists."
else
    echo "File '$filename' does not exist."
fi