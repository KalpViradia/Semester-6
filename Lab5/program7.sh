#!/bin/bash

read -p "Enter a year: " year

if (( year % 400 == 0 )); then
    echo "Leap Year"
fi

if (( year % 400 != 0 && year % 100 == 0 )); then
    echo "Not a Leap Year"
fi

if (( year % 400 != 0 && year % 100 != 0 && year % 4 == 0 )); then
    echo "Leap Year"
fi

if (( year % 400 != 0 && year % 100 != 0 && year % 4 != 0 )); then
    echo "Not a Leap Year"
fi
