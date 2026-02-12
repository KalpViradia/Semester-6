#include <stdio.h>

int main() {
    int n;

    printf("Enter number of processes: ");
    scanf("%d", &n);

    int pid[n], at[n], bt[n], ft[n], tat[n], wt[n], done[n];
    float total_tat = 0, total_wt = 0;

    for(int i = 0; i < n; i++) {
        pid[i] = i + 1;
        done[i] = 0;

        printf("\nProcess P%d\n", pid[i]);
        printf("Arrival Time: ");
        scanf("%d", &at[i]);
        printf("Burst Time: ");
        scanf("%d", &bt[i]);
    }

    int completed = 0, time = 0;

    printf("\nExecution Order: ");

    while(completed < n) {
        int idx = -1;
        int min_bt = 9999;

        for(int i = 0; i < n; i++) {
            if(at[i] <= time && done[i] == 0 && bt[i] < min_bt) {
                min_bt = bt[i];
                idx = i;
            }
        }

        if(idx != -1) {
            printf("P%d ", pid[idx]);
            time += bt[idx];
            ft[idx] = time;
            done[idx] = 1;
            completed++;
        }
        else {
            time++;
        }
    }

    for(int i = 0; i < n; i++) {
        tat[i] = ft[i] - at[i];
        wt[i] = tat[i] - bt[i];
        total_tat += tat[i];
        total_wt += wt[i];
    }

    printf("\n\nProcess\tT0\t△T\tT1\tTAT\tWT\n");
    for(int i = 0; i < n; i++)
        printf("P%d\t%d\t%d\t%d\t%d\t%d\n",
               pid[i], at[i], bt[i], ft[i], tat[i], wt[i]);

    printf("\nAverage Turnaround Time = %.2f", total_tat/n);
    printf("\nAverage Waiting Time = %.2f\n", total_wt/n);

    return 0;
}
