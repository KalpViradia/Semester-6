#!/bin/bash
echo "Enter number:"
read n

flag=0
for ((i=2; i<=n/2; i++))
do
  if [ $((n%i)) -eq 0 ]
  then
    flag=1
    break
  fi
done

if [ $n -le 1 ]
then
  echo "Not Prime"
elif [ $flag -eq 0 ]
then
  echo "Prime"
else
  echo "Not Prime"
fi