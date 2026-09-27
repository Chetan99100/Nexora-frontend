import { io, Socket } from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8000';

/**
 * Helper function to create a real-time WebSocket connection 
 * for live telemetry (heart rate, SpO2, GPS) between backend and frontend.
 */
export const createTelemetrySocket = (ambulanceId: string): Socket => {
  return io(`${SOCKET_URL}/ws/telemetry/${ambulanceId}`, {
    transports: ['websocket'],
    autoConnect: true,
  });
};