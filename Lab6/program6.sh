#!/bin/bash

read -p "Enter your age" n

if [ $n -ge 18 ]; then
    echo "Person is eligible to vote"

else
    echo "Person is not eligible to vote"

fi
