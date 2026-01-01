#!/bin/bash

read -p "Enter first number" n1
read -p "Enter second number" n2

if [ $n1 -gt $n2 ]; then
    echo "Largest number is $n1"
fi

if [ $n2 -gt $n1 ]; then
    echo "Largest number is $n2"
fi

if [ $n1 -eq $n2 ]; then
    echo "Both are equal: $n1"
fi
