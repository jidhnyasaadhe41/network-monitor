# basic anomaly detection for latency values

import numpy as np

latency_data = [18, 20, 22, 19, 200]

mean = np.mean(latency_data)
std_dev = np.std(latency_data)

print("Checking anomalies...\n")

for value in latency_data:
    if abs(value - mean) > 2 * std_dev:
        print(f"High anomaly detected: {value}")
    else:
        print(f"Normal value: {value}")