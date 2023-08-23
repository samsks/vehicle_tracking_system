export function getCurrentPosition(
  options?: PositionOptions
): Promise<{ lat: number; lng: number }> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation not supported by browser");
    }
    navigator.geolocation.getCurrentPosition(
      (position) =>
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      (error) => {
        if (
          error.code === error.PERMISSION_DENIED ||
          error.code === error.POSITION_UNAVAILABLE
        ) {
          const alternativeLocation = {
            lat: -14.235004,
            lng: -51.92528,
          };
          resolve(alternativeLocation);
        } else {
          reject(error);
        }
      },
      options
    );
  });
}
