#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main() {
    FILE *fp_src, *fp_dst;
    char src_file[100], dst_file[100];
    int ch, prev = 0;

    printf("Enter the source file: ");
    scanf("%s", src_file);
    printf("Enter the destination file: ");
    scanf("%s", dst_file);

    if (strcmp(src_file, dst_file) == 0) {
        printf("Error: source and destination files must be different.\n");
        return 1;
    }

    fp_src = fopen(src_file, "r");
    fp_dst = fopen(dst_file, "a");

    if (!fp_src || !fp_dst) {
        printf("Error opening files.\n");
        return 1;
    }

    while ((ch = fgetc(fp_src)) != EOF) {
        if (!isalnum(prev) && isalpha(ch)) {
            fputc(toupper(ch), fp_dst);
        } else {
            fputc(ch, fp_dst);
        }
        prev = ch;
    }

    fclose(fp_src);
    fclose(fp_dst);
    printf("File processed and appended successfully.\n");

    return 0;
}