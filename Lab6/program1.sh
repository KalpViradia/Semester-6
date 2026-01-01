#!/bin/bash

read -p "Enter a number: " n

if (( n > 10 )); then
    echo "$n is greater than 10"
else
    echo "$n is not greater than 10"
fi
