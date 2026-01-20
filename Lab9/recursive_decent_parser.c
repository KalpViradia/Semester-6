// Write a program to implement recursive decent parser for following grammar:
// E → E + T | T
// T → T * F | F
// F → id

// E  → T E'
// E' → + T E' | ε
// T  → F T'
// T' → * F T' | ε
// F  → id

#include <stdio.h>
#include <string.h>

#define SUCCESS 1
#define FAILED 0

int E(), Edash(), T(), Tdash(), F();

const char *cursor;
char string[64];

int main() {
    puts("Enter the string:");
    scanf("%s", string);

    cursor = string;

    puts("\nInput           Action");
    puts("--------------------------------");

    if (E() && *cursor == '\0') {
        puts("--------------------------------");
        puts("String is successfully parsed");
    }
    else {
        puts("--------------------------------");
        puts("Error in parsing String");
    }
    return 0;
}

// E → T E'
int E() {
    printf("%-16s E -> T E'\n", cursor);
    return (T() && Edash());
}

// E' → + T E' | ε
int Edash() {
    if (*cursor == '+') {
        printf("%-16s E' -> + T E'\n", cursor);
        cursor++;
        return (T() && Edash());
    }
    printf("%-16s E' -> ε\n", cursor);
    return SUCCESS;
}

// T → F T'
int T() {
    printf("%-16s T -> F T'\n", cursor);
    return (F() && Tdash());
}

// T' → * F T' | ε
int Tdash() {
    if (*cursor == '*') {
        printf("%-16s T' -> * F T'\n", cursor);
        cursor++;
        return (F() && Tdash());
    }
    printf("%-16s T' -> ε\n", cursor);
    return SUCCESS;
}

// F → id
int F() {
    if (*cursor == 'i' && *(cursor + 1) == 'd') {
        printf("%-16s F -> id\n", cursor);
        cursor += 2;
        return SUCCESS;
    }
    return FAILED;
}