export enum DeviceStatus {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  MAINTENANCE = "MAINTENANCE",
  ERROR = "ERROR",
  PROVISIONING = "PROVISIONING"
}

export enum DeviceType {
  PLC = "PLC",
  SENSOR = "SENSOR",
  ACTUATOR = "ACTUATOR",
  ROBOTIC_ARM = "ROBOTIC_ARM",
  GATEWAY = "GATEWAY"
}

export interface IIoTDevice {
  id: string;
  name: string;
  type: DeviceType;
  factoryId: string;
  floorZone: string;
  status: DeviceStatus;
  firmwareVersion: string;
  lastSync: string;
  metadata: Record<string, any>;
}

export interface TelemetryPayload {
  deviceId: string;
  timestamp: string;
  values: {
    temperature?: number;
    pressure?: number;
    vibration?: number;
    powerUsage?: number;
    cycleTime?: number;
    [key: string]: any;
  };
  priority: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW";
}

export interface EdgeNodeStatus {
  nodeId: string;
  cpuUsage: number;
  memoryUsage: number;
  offlineBufferPercent: number;
  connectedDevices: number;
  uplinkStatus: "CONNECTED" | "DISCONNECTED";
}
