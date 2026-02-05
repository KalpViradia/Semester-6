#!/bin/bash

while true
do
    echo "------------------------------------------"
    echo "1. Display calendar of current month"
    echo "2. Display today's date and time"
    echo "3. Display logged-in usernames"
    echo "4. Display your name at given x,y position"
    echo "5. Display your terminal number"
    echo "6. Exit"
    echo "------------------------------------------"
    echo "Enter your choice:"
    read choice

    case $choice in
        1) cal ;;
        2) date ;;
        3) who ;;
        4)
           echo "Enter x position:"
           read x
           echo "Enter y position:"
           read y
           tput cup $x $y
           echo "Your Name"
           ;;
        5) tty ;;
        6) exit ;;
        *) echo "Invalid choice" ;;
    esac
done