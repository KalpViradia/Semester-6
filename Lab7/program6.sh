#!/bin/bash
echo "Enter two numbers:"
read a
read b

if [ $a -eq $b ]
then
    echo "Both numbers are equal"
else
    if [ $a -gt $b ]
    then
        echo "$a is larger"
    else
        echo "$b is larger"
    fi
fi
