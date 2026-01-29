#!/bin/bash
echo "Enter n:"
read n

count=0
num=2

for (( ; count<n; num++ ))
do
  flag=0
  for ((i=2; i<=num/2; i++))
  do
    if [ $((num%i)) -eq 0 ]
    then
      flag=1
      break
    fi
  done

  if [ $flag -eq 0 ]
  then
    echo $num
    count=$((count+1))
  fi
done