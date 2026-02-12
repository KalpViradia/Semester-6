#include <stdio.h>

#define MAX 100

int main() {
    int n, quantum, cs;

    printf("Enter number of processes: ");
    scanf("%d", &n);

    int pid[MAX], at[MAX], bt[MAX], rem[MAX], ft[MAX];
    int queue[MAX], front = 0, rear = 0;
    int visited[MAX] = {0};

    float total_tat = 0, total_wt = 0;

    for(int i = 0; i < n; i++) {
        pid[i] = i + 1;

        printf("\nProcess P%d\n", pid[i]);
        printf("Arrival Time: ");
        scanf("%d", &at[i]);
        printf("Burst Time: ");
        scanf("%d", &bt[i]);

        rem[i] = bt[i];
    }

    printf("Enter Time Quantum: ");
    scanf("%d", &quantum);

    printf("Enter Context Switch Time: ");
    scanf("%d", &cs);

    int time = 0, completed = 0;
    int last = -1, context_switch_count = 0;

    printf("\nExecution Order: ");

    for(int i = 0; i < n; i++) {
        if(at[i] == 0) {
            queue[rear++] = i;
            visited[i] = 1;
        }
    }

    while(completed < n) {

        if(front == rear) {
            time++;
            for(int i = 0; i < n; i++) {
                if(at[i] <= time && !visited[i]) {
                    queue[rear++] = i;
                    visited[i] = 1;
                }
            }
            continue;
        }

        int i = queue[front++];

        if(last != -1 && last != i) {
            time += cs;
            context_switch_count++;
        }

        printf("P%d ", pid[i]);

        if(rem[i] > quantum) {
            time += quantum;
            rem[i] -= quantum;
        } else {
            time += rem[i];
            rem[i] = 0;
            ft[i] = time;
            completed++;
        }

        last = i;

        for(int j = 0; j < n; j++) {
            if(at[j] <= time && !visited[j]) {
                queue[rear++] = j;
                visited[j] = 1;
            }
        }

        if(rem[i] > 0)
            queue[rear++] = i;
    }

    printf("\n\nProcess\tT0\t△T\tT1\tTAT\tWT\n");

    for(int i = 0; i < n; i++) {
        int tat = ft[i] - at[i];
        int wt = tat - bt[i];

        total_tat += tat;
        total_wt += wt;

        printf("P%d\t%d\t%d\t%d\t%d\t%d\n",
               pid[i], at[i], bt[i], ft[i], tat, wt);
    }

    printf("\nTotal Context Switches = %d", context_switch_count);
    printf("\nAverage Turnaround Time = %.2f", total_tat/n);
    printf("\nAverage Waiting Time = %.2f\n", total_wt/n);

    return 0;
}
