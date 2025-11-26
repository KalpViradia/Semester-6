#include <stdio.h>

int main() {
    FILE *fp_src, *fp_dst;
    char src_file[100], dst_file[100];
    char ch;

    printf("Enter the source file: ");
    scanf("%s", src_file);
    printf("Enter the destination file: ");
    scanf("%s", dst_file);
    fp_src = fopen(src_file, "r");
    fp_dst = fopen(dst_file, "a");
    ch = fgetc(fp_src);

    while(ch != EOF){
        fputc(ch, fp_dst);
        ch = fgetc(fp_src);
    }

    fclose(fp_src);
    fclose(fp_dst);
    printf("File copied successfully.\n");

    return 0;
}