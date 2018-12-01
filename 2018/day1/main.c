#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    FILE *fp = fopen("input.txt", "r");
    long size;
    char *buffer;
    char ch;
    int result = 0;
    size_t index = 0;
    char *token;

    if (fp == NULL) {
        perror("oh no");
        exit(0);
    }

    // get size
    fseek(fp, 0L, SEEK_END);
    size = ftell(fp);
    rewind(fp);

    buffer = (char*) malloc(size);

    // read into buffer
    while((ch = fgetc(fp)) != EOF) {
        buffer[index++] = ch;
    }

    // read tokens
    token = strtok(buffer, "\n");
    result += atoi(token);

    while (token != NULL) {
        token = strtok(NULL, "\n");
        if (token != NULL) {
            result += atoi(token);
        }
    }

    printf("%d\n", result);

    free(buffer);
    return 0;
}
