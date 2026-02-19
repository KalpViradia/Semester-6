#include <stdio.h>

int main() {
    int frames, pages;

    printf("Enter number of frames: ");
    scanf("%d", &frames);

    printf("Enter number of pages: ");
    scanf("%d", &pages);

    int page[pages];
    printf("Enter page reference string:\n");
    for(int i = 0; i < pages; i++) {
        scanf("%d", &page[i]);
    }

    int frame[frames];
    int pageFaults = 0;

    // Initialize frames as empty
    for(int i = 0; i < frames; i++) {
        frame[i] = -1;
    }

    for(int i = 0; i < pages; i++) {
        int found = 0;

        // Check if page already exists (Hit)
        for(int j = 0; j < frames; j++) {
            if(frame[j] == page[i]) {
                found = 1;
                break;
            }
        }

        // If not found → Page Fault
        if(!found) {
            int replaceIndex = -1;
            int farthest = i + 1;

            // Check for empty frame first
            for(int j = 0; j < frames; j++) {
                if(frame[j] == -1) {
                    replaceIndex = j;
                    break;
                }
            }

            // If no empty frame, find optimal page to replace
            if(replaceIndex == -1) {
                for(int j = 0; j < frames; j++) {
                    int k;
                    for(k = i + 1; k < pages; k++) {
                        if(frame[j] == page[k]) {
                            if(k > farthest) {
                                farthest = k;
                                replaceIndex = j;
                            }
                            break;
                        }
                    }

                    // If page not used again
                    if(k == pages) {
                        replaceIndex = j;
                        break;
                    }
                }
            }

            frame[replaceIndex] = page[i];
            pageFaults++;
        }

        // Print frame status
        printf("Frames: ");
        for(int j = 0; j < frames; j++) {
            printf("%d ", frame[j]);
        }
        printf("\n");
    }

    printf("\nTotal Page Faults = %d\n", pageFaults);

    return 0;
}