#include <stdio.h>
#include <string.h>

int main() {
    char nonTerminal;
    char production[20], alpha[20], beta[20];

    printf("Enter the non-terminal: ");
    scanf(" %c", &nonTerminal);

    printf("Enter the production (format: A->Aa|b): ");
    scanf("%s", production);

    // Extract alpha and beta
    int i = 3, j = 0;

    // Check for left recursion
    if (production[i] == nonTerminal) {
        i++;  // skip non-terminal
        while (production[i] != '|') {
            alpha[j++] = production[i++];
        }
        alpha[j] = '\0';

        i++; // skip '|'
        j = 0;
        while (production[i] != '\0') {
            beta[j++] = production[i++];
        }
        beta[j] = '\0';

        printf("\nGrammar after eliminating left recursion:\n");
        printf("%c -> %s%c'\n", nonTerminal, beta, nonTerminal);
        printf("%c' -> %s%c' | ε\n", nonTerminal, alpha, nonTerminal);
    } else {
        printf("\nNo left recursion found.\n");
    }

    return 0;
}
