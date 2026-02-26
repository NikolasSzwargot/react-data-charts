import { useMemo } from "react";

export default function useOrdersByCountry(orders) {
  return useMemo(() => {
    const counts = orders.reduce((acc, order) => {
      const code = order.country?.toUpperCase();

      if (!code) {
        return acc;
      }

      acc[code] = (acc[code] || 0) + 1;

      return acc;
    }, {});

    return Object.entries(counts).map(([code, value]) => ({
      code,
      value,
    }));
  }, [orders]);
}
