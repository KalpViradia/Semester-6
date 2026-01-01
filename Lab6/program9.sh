#!/bin/bash

read -p "Enter first side length: " n1
read -p "Enter second side length: " n2
read -p "Enter third side length: " n3

if (( n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1 )); then
    echo "Triangle is valid"
else
    echo "Triangle is not valid"
fi
