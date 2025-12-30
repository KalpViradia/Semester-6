#include <stdio.h>
#include <string.h>

int main() {
    char str[20];

    printf("Enter the input string: ");
    scanf("%s", str);

    if (strcmp(str, "da") == 0 ||
        strcmp(str, "bdc") == 0 ||
        strcmp(str, "dc") == 0 ||
        strcmp(str, "bda") == 0) {
        printf("The string CAN be derived from the grammar.\n");
    } else {
        printf("The string CANNOT be derived from the grammar.\n");
    }

    return 0;
}
