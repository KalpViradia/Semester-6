#!/bin/bash
echo "Enter a character:"
read ch

case $ch in
  a|e|i|o|u|A|E|I|O|U)
    echo "Vowel" ;;
  *)
    echo "Consonant" ;;
esac