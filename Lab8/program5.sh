#!/bin/bash

echo "Enter marks of 5 subjects:"
read m1 m2 m3 m4 m5

total=$((m1 + m2 + m3 + m4 + m5))
percentage=$((total / 5))

echo "Percentage: $percentage"

if [ $percentage -gt 90 ]; then
    echo "Grade A"
elif [ $percentage -ge 80 ]; then
    echo "Grade B"
elif [ $percentage -ge 70 ]; then
    echo "Grade C"
elif [ $percentage -ge 60 ]; then
    echo "Grade D"
elif [ $percentage -ge 50 ]; then
    echo "Grade E"
else
    echo "Grade F"
fi
