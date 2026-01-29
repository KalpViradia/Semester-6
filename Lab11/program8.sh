#!/bin/bash
echo "Enter first number:"
read a
echo "Enter second number:"
read b

echo "Choose operation:"
echo "1.Add"
echo "2.Subtract"
echo "3.Multiply"
echo "4.Divide"
read ch

case $ch in
  1) echo "Result = $((a+b))" ;;
  2) echo "Result = $((a-b))" ;;
  3) echo "Result = $((a*b))" ;;
  4) echo "Result = $((a/b))" ;;
  *) echo "Invalid choice" ;;
esac