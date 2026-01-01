#!/bin/bash

read -p "Enter a number" n


if [ $n -eq 0 ]; then
    echo "Number is 0"
fi

if [ $n -gt 0 ]; then
    echo "$n is Positive"
fi

if [ $n -lt 0 ]; then
    echo "$n is Negative"

fi
