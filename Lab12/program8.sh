#!/bin/bash

hour=$(date +"%I")
ampm=$(date +"%p")
time=$(date +"%I:%M %p")
date_today=$(date +"%d-%m-%Y")

if [ "$hour" -lt 12 ]
then
    msg="Good Morning"
elif [ "$hour" -lt 16 ]
then
    msg="Good Afternoon"
else
    msg="Good Evening"
fi

echo "Date: $date_today"
echo "Time: $time"
echo "$msg!"