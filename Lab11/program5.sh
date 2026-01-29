#!/bin/bash
echo "Enter month number (1-12):"
read m

case $m in
  1|3|5|7|8|10|12) echo "31 days" ;;
  4|6|9|11) echo "30 days" ;;
  2) echo "28 or 29 days" ;;
  *) echo "Invalid month" ;;
esac