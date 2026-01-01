#!/bin/bash

read -p "Enter the first number: " num1

echo "Choose an operation:"
echo "1) Addition"
echo "2) Subtraction"
echo "3) Multiplication"
echo "4) Division"
read -p "Enter your choice (1/2/3/4): " choice

read -p "Enter the second number: " num2

if (( choice == 1 )); then
    result=$(( num1 + num2 ))
    echo "The result of addition is: $result"
fi

if (( choice == 2 )); then
    result=$(( num1 - num2 ))
    echo "The result of subtraction is: $result"
fi

if (( choice == 3 )); then
    result=$(( num1 * num2 ))
    echo "The result of multiplication is: $result"
fi

if (( choice == 4 )); then
    if (( num2 != 0 )); then
        result=$(( num1 / num2 ))
        echo "The result of division is: $result"
    fi

    if (( num2 == 0 )); then
        echo "Error: Cannot divide by zero!"
    fi
fi

if (( choice < 1 || choice > 4 )); then
    echo "Invalid choice!"
fi
