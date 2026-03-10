#include <stdio.h>
#include <string.h>

#define MAX 100

char stack[MAX];
int top = -1;

// Push operation
void push(char ch) {
    if (top == MAX - 1) {
        printf("Stack Overflow\n");
    } else {
        stack[++top] = ch;
    }
}

// Pop operation
void pop() {
    if (top == -1) {
        printf("Stack Underflow\n");
    } else {
        top--;
    }
}

int main() {
    char input[MAX];
    int i;

    printf("Enter a string containing only a and b: ");
    scanf("%s", input);

    for (i = 0; i < strlen(input); i++) {

        if (input[i] != 'a' && input[i] != 'b') {
            printf("Invalid String (Contains characters other than a and b)\n");
            return 0;
        }

        if (top == -1) {
            push(input[i]);
        }
        else if (stack[top] == input[i]) {
            push(input[i]);
        }
        else {
            pop();
        }
    }

    if (top == -1) {
        printf("String ACCEPTED (Equal number of a's and b's)\n");
    } else {
        printf("String REJECTED (Unequal number of a's and b's)\n");
    }

    return 0;
}