#!/bin/bash

read -p "Enter first number: " n1
read -p "Enter second number: " n2

if [ "$n1" -gt "$n2" ]; then
    echo "Largest number is $n1"
elif [ "$n2" -gt "$n1" ]; then
    echo "Largest number is $n2"
else
    echo "Both are equal: $n1"
fi
