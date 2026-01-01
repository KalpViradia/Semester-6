#!/bin/bash

read -p "Enter a year:" year

if [ $((year % 400)) -eq 0 ]; then
    echo "Leap Year"

elif [ $((year % 100)) -eq 0 ]; then
    echo "Not a Leap Year"

elif [ $((year % 4)) -eq 0 ]; then
    echo "Leap Year"

else
    echo "Not a Leap Year"
fi

