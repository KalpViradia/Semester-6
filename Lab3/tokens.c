#include <stdio.h>
#include <string.h>
#include <ctype.h>

char keywords[][10] = {
    "int", "float", "char", "double", "return",
    "if", "else", "for", "while", "do", "void"
};

int isKeyword(char *word) {
    for (int i = 0; i < 11; i++) {
        if (strcmp(word, keywords[i]) == 0)
            return 1;
    }
    return 0;
}

int main() {
    FILE *fp = fopen("output.txt", "r");

    if (fp == NULL) {
        printf("Error opening cleaned file.\n");
        return 1;
    }

    char c, token[50];
    int j;

    int keywordCount = 0, identifierCount = 0, constantCount = 0;
    int operatorCount = 0, symbolCount = 0;

    printf("Detected Tokens:\n");

    while ((c = fgetc(fp)) != EOF) {

        if (isalpha(c)) {
            j = 0;
            token[j++] = c;

            while (isalnum(c = fgetc(fp)))
                token[j++] = c;

            token[j] = '\0';

            if (isKeyword(token)) {
                printf("Keyword: %s\n", token);
                keywordCount++;
            } else {
                printf("Identifier: %s\n", token);
                identifierCount++;
            }

            ungetc(c, fp);
        }
        else if (isdigit(c)) {
            j = 0;
            token[j++] = c;
            while (isdigit(c = fgetc(fp)))
                token[j++] = c;
            token[j] = '\0';

            printf("Constant: %s\n", token);
            constantCount++;

            ungetc(c, fp);
        }
        else if (strchr("+-*/=%", c)) {
            printf("Operator: %c\n", c);
            operatorCount++;
        }
        else if (strchr("(){}[];,#<>", c)) {
            printf("Symbol: %c\n", c);
            symbolCount++;
        }
    }

    printf("\n--- Token Count ---\n");
    printf("Keywords: %d\n", keywordCount);
    printf("Identifiers: %d\n", identifierCount);
    printf("Constants: %d\n", constantCount);
    printf("Operators: %d\n", operatorCount);
    printf("Symbols: %d\n", symbolCount);

    fclose(fp);
    return 0;
}
