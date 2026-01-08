#!/bin/bash
echo "Enter Basic Salary:"
read bs

if [ $bs -ge 30000 ]
then
    da=$((bs * 95 / 100))
    hra=$((bs * 30 / 100))
else
    if [ $bs -ge 20000 ]
    then
        da=$((bs * 90 / 100))
        hra=$((bs * 25 / 100))
    else
        if [ $bs -ge 10000 ]
        then
            da=$((bs * 80 / 100))
            hra=$((bs * 20 / 100))
        else
            da=0
            hra=0
        fi
    fi
fi

gross=$((bs + da + hra))
echo "Gross Salary = $gross"
