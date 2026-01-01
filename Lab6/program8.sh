#!/bin/bash

read -p "Enter first number" n1
read -p "Enter second number" n2

if [ $n1 -eq $n2 ]; then
    echo "Both are equal"

else
    echo "Both are not equal"
fi
