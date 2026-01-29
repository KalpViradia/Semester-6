#!/bin/bash
echo "Enter number:"
read n

case $((n%2)) in
  0) echo "Even" ;;
  1) echo "Odd" ;;
esac