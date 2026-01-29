#!/bin/bash
echo "Enter base:"
read base
echo "Enter power:"
read power

result=1
for ((i=1; i<=power; i++))
do
  result=$((result*base))
done

echo "Result = $result"