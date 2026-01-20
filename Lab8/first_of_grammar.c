#include <stdio.h>
#include <ctype.h>
#include <string.h>

int n;
char prod[20][50];
char firstSet[20][20];
int firstCount[20];

int indexOf(char c) {
    for (int i = 0; i < n; i++)
        if (prod[i][0] == c)
            return i;
    return -1;
}

int contains(int idx, char c) {
    for (int i = 0; i < firstCount[idx]; i++)
        if (firstSet[idx][i] == c)
            return 1;
    return 0;
}

void addFirst(int idx, char c) {
    if (!contains(idx, c))
        firstSet[idx][firstCount[idx]++] = c;
}

void findFirst(int idx) {
    char *rhs = strchr(prod[idx], '>') + 1;

    for (int i = 0; rhs[i] != '\0'; i++) {

        // New alternative
        if (rhs[i] == '|')
            continue;

        // Terminal
        if (!isupper(rhs[i]) && rhs[i] != '#') {
            addFirst(idx, rhs[i]);
            while (rhs[i] != '|' && rhs[i] != '\0') i++;
            i--;
        }

        // Epsilon
        else if (rhs[i] == '#') {
            addFirst(idx, '#');
        }

        // Non-terminal
        else {
            int nt = indexOf(rhs[i]);
            findFirst(nt);

            int epsilonFound = 0;
            for (int j = 0; j < firstCount[nt]; j++) {
                if (firstSet[nt][j] == '#')
                    epsilonFound = 1;
                else
                    addFirst(idx, firstSet[nt][j]);
            }

            if (!epsilonFound) {
                while (rhs[i] != '|' && rhs[i] != '\0') i++;
                i--;
            }
        }
    }
}

int main() {
    printf("Enter number of productions: ");
    scanf("%d", &n);

    printf("Enter productions (Example: E->TR|#):\n");
    for (int i = 0; i < n; i++) {
        scanf("%s", prod[i]);
        firstCount[i] = 0;
    }

    for (int i = 0; i < n; i++)
        findFirst(i);

    printf("\nFIRST sets:\n");
    for (int i = 0; i < n; i++) {
        printf("First(%c)= { ", prod[i][0]);
        for (int j = 0; j < firstCount[i]; j++)
            printf("%c, ", firstSet[i][j]);
        printf("}\n");
    }

    return 0;
}