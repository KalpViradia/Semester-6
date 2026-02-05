#!/bin/bash

echo "Executable files:"
find . -type f -executable

echo "Directories:"
find . -type d

echo "Zero-size files:"
find . -type f -size 0