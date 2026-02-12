#include <stdio.h>

int main() {
    int n;

    printf("Enter number of processes: ");
    scanf("%d", &n);

    int pid[n], at[n], bt[n], ft[n], tat[n], wt[n];
    float total_tat = 0, total_wt = 0;

    for(int i = 0; i < n; i++) {
        pid[i] = i + 1;
        printf("\nProcess P%d\n", pid[i]);
        printf("Arrival Time: ");
        scanf("%d", &at[i]);
        printf("Burst Time: ");
        scanf("%d", &bt[i]);
    }

    for(int i = 0; i < n - 1; i++) {
        for(int j = i + 1; j < n; j++) {
            if(at[i] > at[j]) {
                int temp;
                temp = at[i]; at[i] = at[j]; at[j] = temp;
                temp = bt[i]; bt[i] = bt[j]; bt[j] = temp;
                temp = pid[i]; pid[i] = pid[j]; pid[j] = temp;
            }
        }
    }

    int time = 0;

    printf("\nExecution Order: ");
    for(int i = 0; i < n; i++) {
        if(time < at[i])
            time = at[i];

        printf("P%d ", pid[i]);

        time += bt[i];
        ft[i] = time;
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
