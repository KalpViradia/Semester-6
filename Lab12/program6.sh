#!/bin/bash

total_users=$(cut -d: -f1 /etc/passwd | wc -l)
logged_users=$(who | wc -l)

echo "Total users: $total_users"
echo "Currently logged-in users: $logged_users"