#!/bin/bash

read -p "Enter a number: " n

if [ "$n" -eq 0 ]; then
    echo "Number is 0"
elif [ "$n" -gt 0 ]; then
    echo "$n is Positive"
else
    echo "$n is Negative"
fi
