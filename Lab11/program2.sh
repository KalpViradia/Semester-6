#!/bin/bash
echo "Enter gender (M/F):"
read g

case $g in
  M|m) echo "Male" ;;
  F|f) echo "Female" ;;
  *) echo "Invalid input" ;;
esac