# Architecture & OT/IT Diagrams

## 11. OT/IT Converged Topology (Detailed)
*How factory floor assets interact with cloud intelligence via the Edge Layer.*

```mermaid
graph TD
    subgraph "Cloud Layer (Business Intelligence)"
        Hub[Manufacturing Portal]
        Lake[Data Lakehouse]
        ERP[SAP / ERP Integration]
    end
    subgraph "Aggregation Layer (Regional Site)"
        K8s[Regional K8s Cluster]
        Kafka[Kafka Broker Hub]
    end
    subgraph "Edge Layer (Factory Floor)"
        k3s[k3s Cluster Node]
        PLC[Siemens PLC]
        Robot[Fanuc Robot]
        S1[Sensor: Temp]
        S2[Sensor: Vibration]
    end

    S1 --> k3s
    S2 --> k3s
    PLC --> k3s
    Robot --> k3s
    k3s --> Kafka
    Kafka --> K8s
    K8s --> Lake
    Lake --> Hub
    ERP --> Hub
```

## 13. "Offline-First" Buffering Logic
```mermaid
graph TD
    Ingest[Telemetry Ingest] --> Health{Uplink Connected?}
    Health -->|Yes| Stream[Stream to Cloud Kafka]
    Health -->|No| Buffer[Write to Local SQLite / Redis]
    Buffer --> Retransmit[Retry Uplink periodically]
    Retransmit --> Health
```

## 20. Device Provisioning State Machine
```mermaid
stateDiagram-v2
    Unprovisioned --> IdentityCheck: Physical Serial Provided
    IdentityCheck --> Approved: Hardware ID Verified
    Approved --> CertIssued: OIDC/x.509 Certificate Pushed
    CertIssued --> Active: Telemetry Stream Authorized
    Active --> Maintenance: Threshold Triggered
    Maintenance --> Active: Resolution Verified
```
