#!/bin/bash
echo "Enter command name:"
read cmd

if command -v "$cmd" >/dev/null 2>&1
then
    $cmd
else
    echo "Invalid command"
fi