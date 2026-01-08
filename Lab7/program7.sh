#!/bin/bash
echo "Enter three sides of triangle:"
read a
read b
read c

if [ $((a + b)) -gt $c ] && [ $((a + c)) -gt $b ] && [ $((b + c)) -gt $a ]
then
    if [ $a -eq $b ] && [ $b -eq $c ]
    then
        echo "Equilateral Triangle"
    else
        if [ $a -eq $b ] || [ $b -eq $c ] || [ $a -eq $c ]
        then
            echo "Isosceles Triangle"
        else
            echo "Scalene Triangle"
        fi
    fi
else
    echo "Not a Valid Triangle"
fi
