#include <stdio.h>
#include <string.h>

int main() {
    char str[100];
    int i;
    char state = 'A';

    printf("Enter the input string: ");
    scanf("%s", str);

    for (i = 0; i < strlen(str); i++) {
        switch (state) {
            case 'A':
                if (str[i] == 'a')
                    state = 'B';
                else if (str[i] == 'b')
                    state = 'A';
                else {
                    printf("Invalid input symbol\n");
                    return 0;
                }
                break;

            case 'B':
                if (str[i] == 'a')
                    state = 'B';
                else if (str[i] == 'b')
                    state = 'C';
                else {
                    printf("Invalid input symbol\n");
                    return 0;
                }
                break;

            case 'C':
                if (str[i] == 'a')
                    state = 'B';
                else if (str[i] == 'b')
                    state = 'D';
                else {
                    printf("Invalid input symbol\n");
                    return 0;
                }
                break;

            case 'D':
                if (str[i] == 'a')
                    state = 'B';
                else if (str[i] == 'b')
                    state = 'A';
                else {
                    printf("Invalid input symbol\n");
                    return 0;
                }
                break;
        }
    }

    if (state == 'D')
        printf("String ACCEPTED (matches (a+b)*abb)\n");
    else
        printf("String REJECTED (does not match (a+b)*abb)\n");

    return 0;
}
