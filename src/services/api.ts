

export type Pet = {
  id: number;
  householdId: number;
  name: string;
  species: string | null;
  breed: string | null;
  birthDate: string | null;
  avatarUrl: string | null;
  chipNumber: string | null;
};

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

export type ConsumptionEvent = {
    id: number;
    deviceId: number;
    timestamp: string; 
    amountGrams: number;
    durationSeconds: number;
}

// --- Mock Data ---

const mockPets: Pet[] = [
  { id: 1, householdId: 1, name: 'Mishifu', species: 'Gato', breed: 'Siamés', birthDate: '2020-01-15', avatarUrl: null, chipNumber: '12345' },
  { id: 2, householdId: 1, name: 'Rocky', species: 'Perro', breed: 'Golden Retriever', birthDate: '2018-05-20', avatarUrl: null, chipNumber: '67890' },
];

const mockDevices: Device[] = [
  { id: 1, householdId: 1, deviceId: 'KP-F001', name: 'Comedero Inteligente', mode: 'comedero', status: 'online', type: 'Feeder', batteryLevel: 85, lastUpdate: new Date().toISOString(), ipAddress: '192.168.1.100' },
  { id: 2, householdId: 1, deviceId: 'KP-C001', name: 'Collar de Mishifu', mode: 'collar', status: 'online', type: 'Collar', batteryLevel: 92, lastUpdate: new Date().toISOString(), ipAddress: '192.168.1.101' },
];

const mockConsumptionEvents: ConsumptionEvent[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  deviceId: 1, // Comedero Inteligente
  timestamp: new Date(Date.now() - i * 60 * 60 * 1000).toISOString(),
  amountGrams: 20 + Math.random() * 10, // 20-30g
  durationSeconds: 30 + Math.random() * 30, // 30-60s
}));


// --- Mock API Functions ---

export const getPetsByHouseholdId = async (householdId: number): Promise<Pet[]> => {
  console.log(`[Mock API] Fetching pets for household ${householdId}`);
  await new Promise(resolve => setTimeout(resolve, 300)); // Simulate network delay
  return mockPets;
};

export const getDevicesByHouseholdId = async (householdId: number): Promise<Device[]> => {
  console.log(`[Mock API] Fetching devices for household ${householdId}`);
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockDevices;
};

export const getConsumptionEventsByDeviceId = async (deviceId: number): Promise<ConsumptionEvent[]> => {
  console.log(`[Mock API] Fetching consumption events for device ${deviceId}`);
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockConsumptionEvents;
};

// Export types as well