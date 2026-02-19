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
    int time[frames];
    int counter = 0;
    int pageFaults = 0;

    // Initialize frames as empty
    for(int i = 0; i < frames; i++) {
        frame[i] = -1;
        time[i] = 0;
    }

    for(int i = 0; i < pages; i++) {
        int found = 0;

        // Check if page already in frame (Hit)
        for(int j = 0; j < frames; j++) {
            if(frame[j] == page[i]) {
                counter++;
                time[j] = counter;
                found = 1;
                break;
            }
        }

        // If page not found → Page Fault
        if(!found) {
            int lruIndex = 0;

            // Check for empty frame first
            for(int j = 0; j < frames; j++) {
                if(frame[j] == -1) {
                    lruIndex = j;
                    break;
                }
            }

            // If no empty frame, find least recently used
            if(frame[lruIndex] != -1) {
                int minTime = time[0];
                lruIndex = 0;

                for(int j = 1; j < frames; j++) {
                    if(time[j] < minTime) {
                        minTime = time[j];
                        lruIndex = j;
                    }
                }
            }

            frame[lruIndex] = page[i];
            counter++;
            time[lruIndex] = counter;
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