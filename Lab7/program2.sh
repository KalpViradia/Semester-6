#!/bin/bash
echo "Enter marks of 3 subjects:"
read m1
read m2
read m3

total=$((m1 + m2 + m3))
percent=$((total / 3))

echo "Total Marks = $total"
echo "Percentage = $percent%"

if [ $percent -ge 75 ]
then
    echo "Class: First Class"
else
    if [ $percent -ge 60 ]
    then
        echo "Class: Second Class"
    else
        if [ $percent -ge 40 ]
        then
            echo "Class: Pass"
        else
            echo "Class: Fail"
        fi
    fi
fi
