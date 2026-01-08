#!/bin/bash

echo "Enter four numbers:"
read a b c d

if [ $a -ge $b ] && [ $a -ge $c ] && [ $a -ge $d ]; then
    echo "Largest number is $a"
elif [ $b -ge $a ] && [ $b -ge $c ] && [ $b -ge $d ]; then
    echo "Largest number is $b"
elif [ $c -ge $a ] && [ $c -ge $b ] && [ $c -ge $d ]; then
    echo "Largest number is $c"
else
    echo "Largest number is $d"
fi
