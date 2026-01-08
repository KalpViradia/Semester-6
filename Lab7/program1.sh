#!/bin/bash
echo "Enter year:"
read y

if [ $((y % 4)) -eq 0 ]
then
    if [ $((y % 100)) -ne 0 ]
    then
        echo "Leap Year"
    else
        if [ $((y % 400)) -eq 0 ]
        then
            echo "Leap Year"
        else
            echo "Not a Leap Year"
        fi
    fi
else
    echo "Not a Leap Year"
fi
