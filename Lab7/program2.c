#include <stdio.h>
#include <string.h>

int main() {
    char nonTerminal;
    char prod1[20], prod2[20];
    char common[20];
    int i = 0;

    printf("Enter the non-terminal: ");
    scanf(" %c", &nonTerminal);

    printf("Enter first production: ");
    scanf("%s", prod1);

    printf("Enter second production: ");
    scanf("%s", prod2);

    // Find common prefix
    while (prod1[i] == prod2[i] && prod1[i] != '\0') {
        common[i] = prod1[i];
        i++;
    }
    common[i] = '\0';

    if (i == 0) {
        printf("\nNo left factoring needed.\n");
    } else {
        printf("\nGrammar after left factoring:\n");
        printf("%c -> %s%c'\n", nonTerminal, common, nonTerminal);
        printf("%c' -> %s | %s\n",
               nonTerminal,
               prod1 + i,
               prod2 + i);
    }

    return 0;
}
