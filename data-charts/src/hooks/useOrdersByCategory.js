import { useMemo } from "react";

export default function useOrdersByCategoryChartData(orders) {
  return useMemo(() => {
    const countsMap = orders.reduce((acc, order) => {
      const category = order.category;

      if (!category) {
        return acc;
      }

      acc[category] = (acc[category] || 0) + 1;

      return acc;
    }, {});

    const sortedEntries = Object.entries(countsMap).sort((a, b) => b[1] - a[1]);

    return {
      categories: sortedEntries.map(([category]) => category),
      data: sortedEntries.map(([, count]) => count),
    };
  }, [orders]);
}
