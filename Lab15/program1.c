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
    int front = 0;
    int pageFaults = 0;
    
    // Initialize frames with -1 (empty)
    for(int i = 0; i < frames; i++) {
        frame[i] = -1;
    }
    
    for(int i = 0; i < pages; i++) {
        int found = 0;
        
        // Check if page already in frame (hit)
        for(int j = 0; j < frames; j++) {
            if(frame[j] == page[i]) {
                found = 1;
                break;
            }
        }
        
        // If page not found → page fault
        if(!found) {
            frame[front] = page[i];
            front = (front + 1) % frames;
            pageFaults++;
        }
        
        // Print current frame status
        printf("Frames: ");
        for(int j = 0; j < frames; j++) {
            printf("%d ", frame[j]);
        }
        printf("\n");
    }
    
    printf("\nTotal Page Faults = %d\n", pageFaults);
    
    return 0;
}