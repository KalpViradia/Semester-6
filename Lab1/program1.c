#include <stdio.h>

int main() {
    FILE *fp;
    char fileName[100];
    char ch;
    int chars = 0, spaces = 0, tabs = 0, newlines = 0;

    printf("Enter the file name: ");
    scanf("%s", fileName);

    fp = fopen(fileName, "r");
    ch = fgetc(fp);

    while(ch != EOF) {
        if (ch == '\t') {
            tabs++;
        }
        else if(ch == ' ') {
            spaces++;
        }
        else if (ch == '\n') {
            newlines++;
        }
        else {
            chars++;
        }

        ch = fgetc(fp);
    }

    fclose(fp);
    printf("Number of characters: %d\n", chars);
    printf("Number of spaces: %d\n", spaces);
    printf("Number of tabs: %d\n", tabs);
    printf("Number of newlines: %d\n", newlines);

    return 0;
}