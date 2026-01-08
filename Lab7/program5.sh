#!/bin/bash
echo "Enter a number:"
read n

if [ $n -gt 0 ]
then
    echo "Positive Number"
    if [ $((n % 2)) -eq 0 ]
    then
        echo "Even Number"
    else
        echo "Odd Number"
    fi
else
    if [ $n -lt 0 ]
    then
        echo "Negative Number"
    else
        echo "Zero"
    fi
fi
