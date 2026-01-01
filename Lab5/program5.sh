#!/bin/bash

read -p "Enter a number: " n

if (( n % 5 == 0 )); then
    echo "$n is divisible by 5"
fi

if (( n % 5 != 0 )); then
    echo "$n is not divisible by 5"
fi
