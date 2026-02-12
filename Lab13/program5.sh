#!/bin/bash

echo "Enter the filename to count lines:"
read fileline
if [ -f "$fileline" ]; then
    lines=$(wc -l < "$fileline")
    echo "Number of lines in '$fileline': $lines"
else
    echo "File '$fileline' does not exist."
fi