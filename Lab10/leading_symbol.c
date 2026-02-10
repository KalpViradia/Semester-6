#include <stdio.h>
#include <string.h>

int main() {
    int n, i, j;
    char production[50];

    printf("Enter number of productions: ");
    scanf("%d", &n);

    for (i = 0; i < n; i++) {
        printf("\nEnter production %d (e.g., E->E+T|T): ", i + 1);
        scanf("%s", production);

        printf("Production: %s\n", production);
        printf("Leading symbols: ");

        for (j = 0; production[j] != '\0'; j++) {
            if (production[j] == '-' && production[j + 1] == '>') {
                j = j + 2;

                printf("%c ", production[j]);

                while (production[j] != '\0') {
                    if (production[j] == '|') {
                        printf("%c ", production[j + 1]);
                    }
                    j++;
                }
                break;
            }
        }
        printf("\n");
    }

    return 0;
}