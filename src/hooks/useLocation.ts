import * as Location from "expo-location";
import { useState } from "react";

interface Coordinates {
  latitude: number;
  longitude: number;
}

type LocationResult =
  | { success: true; coordinates: Coordinates }
  | { success: false; error: string };

export const useLocation = () => {
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(false);

  const getCurrentLocation = async (): Promise<LocationResult> => {
    setLoading(true);

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      setLoading(false);
      return {
        success: false,
        error: "Permission to access location was denied",
      };
    }

    try {
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });

      const coords = {
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
      };

      setLocation(coords);

      return { success: true, coordinates: coords };
    } catch (error) {
      return { success: false, error: "Erro ao buscar localização" };
    } finally {
      setLoading(false);
    }
  };

  return { location, loading, getCurrentLocation };
};
