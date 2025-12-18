import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the Device type locally for this mock context
export type Device = {
  id: number;
  householdId: number;
  deviceId: string; 
  name: string;
  mode: 'comedero' | 'bebedero' | 'collar' | 'cama_inteligente';
  status: string;
  type: string | null;
  ipAddress: string | null;
  lastUpdate: string | null;
  batteryLevel: number | null;
};

interface SystemMetrics { [key: string]: any; }
interface SystemInfo { [key: string]: any; }

interface WebSocketContextType {
  connected: boolean;
  mqttConnected: boolean;
  mqttBroker: string | null;
  systemMetrics: SystemMetrics | null;
  systemInfo: SystemInfo | null;
  devices: Device[];
  latestReadings: any[];
  sendMessage: (message: any) => void;
  fetchUserDevices: (userId?: number, username?: string) => Promise<void>;
}

const mockDevices: Device[] = [
    { id: 1, deviceId: 'KPCL0021', name: 'Collar de Malto', type: 'Kittypau Collar', status: 'online', batteryLevel: 95, householdId: 1, mode: 'collar', lastUpdate: new Date().toISOString(), ipAddress: '192.168.1.102' },
    { id: 2, deviceId: 'KPCL0022', name: 'Placa de Canela', type: 'Kittypau Tracker', status: 'warning', batteryLevel: 25, householdId: 1, mode: 'collar', lastUpdate: new Date(Date.now() - 5 * 60000).toISOString(), ipAddress: '192.168.1.103' },
];

const mockReadings = [
    { deviceId: 'KPCL0021', sensorType: 'temperature', value: 38.5, unit: '°C', timestamp: new Date().toISOString() },
    { deviceId: 'KPCL0022', sensorType: 'temperature', value: 39.1, unit: '°C', timestamp: new Date().toISOString() },
];

const WebSocketContext = createContext<WebSocketContextType>({} as WebSocketContextType);

export const useWebSocket = () => useContext(WebSocketContext);

export const WebSocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [devices, setDevices] = useState<Device[]>(mockDevices);

  const value = {
    connected: true,
    mqttConnected: true,
    mqttBroker: 'demo.broker.io',
    systemMetrics: { activeDevices: 2, activeSensors: 4, alerts: 1, lastUpdate: new Date().toISOString() },
    systemInfo: { version: '2.1.0-demo', mqttVersion: '1.4.3-demo', lastUpdate: '2023-10-14' },
    devices,
    latestReadings: mockReadings,
    sendMessage: (message: any) => console.log('[Mock WS] Sent:', message),
    fetchUserDevices: async () => { console.log('[Mock WS] Fetched user devices.'); },
  };

  return (
    <WebSocketContext.Provider value={value}>
      {children}
    </WebSocketContext.Provider>
  );
};