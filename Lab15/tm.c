#include <stdio.h>
#include <string.h>

#define MAX 100

int main() {
    char tape[MAX];
    int i, j, k;
    int len;

    printf("Enter string (only a,b,c): ");
    scanf("%s", tape);

    len = strlen(tape);

    while (1) {

        // Step 1: Find first 'a'
        i = 0;
        while (i < len && tape[i] != 'a')
            i++;

        if (i == len)
            break;   // No more 'a' → exit loop

        tape[i] = 'X';   // Mark 'a'

        // Step 2: Find first 'b'
        j = i + 1;
        while (j < len && tape[j] != 'b')
            j++;

        if (j == len) {
            printf("REJECTED\n");
            return 0;
        }

        tape[j] = 'Y';   // Mark 'b'

        // Step 3: Find first 'c'
        k = j + 1;
        while (k < len && tape[k] != 'c')
            k++;

        if (k == len) {
            printf("REJECTED\n");
            return 0;
        }

        tape[k] = 'Z';   // Mark 'c'
    }

    // Final Check: Ensure no unmarked b or c remains
    for (i = 0; i < len; i++) {
        if (tape[i] == 'a' || tape[i] == 'b' || tape[i] == 'c') {
            printf("REJECTED\n");
            return 0;
        }
    }

    printf("ACCEPTED (String is of form a^n b^n c^n)\n");
    return 0;
}