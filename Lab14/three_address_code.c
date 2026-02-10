#include <stdio.h>
#include <string.h>

int main() {
    FILE *fp;
    char expr[50];
    char temp = '1';
    int i;

    fp = fopen("input.txt", "r");
    if (fp == NULL) {
        printf("Error opening file!\n");
        return 1;
    }

    fscanf(fp, "%s", expr);
    fclose(fp);

    printf("Three Address Code:\n");

    // Handle *, /
    for (i = 0; expr[i] != '\0'; i++) {
        if (expr[i] == '*' || expr[i] == '/') {
            printf("t%c = %c %c %c\n",
                   temp, expr[i - 1], expr[i], expr[i + 1]);

            expr[i - 1] = 't';
            expr[i] = temp;
            strcpy(&expr[i + 1], &expr[i + 2]);
            temp++;
            i--;
        }
    }

    // Handle +, -
    for (i = 0; expr[i] != '\0'; i++) {
        if (expr[i] == '+' || expr[i] == '-') {
            printf("t%c = %c %c %c\n",
                   temp, expr[i - 1], expr[i], expr[i + 1]);

            expr[i - 1] = 't';
            expr[i] = temp;
            strcpy(&expr[i + 1], &expr[i + 2]);
            temp++;
            i--;
        }
    }

    // Assignment
    printf("%c = %c%c\n", expr[0], expr[2], expr[3]);

    return 0;
}