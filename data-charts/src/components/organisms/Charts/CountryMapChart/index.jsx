import europeMap from '@highcharts/map-collection/custom/europe.topo.json'

import { useMemo } from 'react'
import { MapsChart } from '@highcharts/react/Maps'
import useOrdersByCountry from '../../../../hooks/useOrdersByCountry'

export default function CountryMapChart({ orders }) {
  const data = useOrdersByCountry(orders)

  const options = useMemo(
    () => ({
      chart: {
        backgroundColor: 'transparent',
        spacing: [8, 8, 8, 8],
        style: {
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        },
      },
      title: {
        text: undefined,
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      mapNavigation: {
        enabled: false,
      },
      colorAxis: {
        min: 0,
        minColor: '#172033',
        maxColor: '#60a5fa',
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.96)',
        borderColor: '#334155',
        style: {
          color: '#e2e8f0',
        },
        pointFormat: '{point.name}: <b>{point.value}</b>',
      },
      plotOptions: {
        series: {
          animation: false,
        },
        map: {
          nullColor: '#0f172a',
          borderColor: '#1e293b',
          borderWidth: 1,
          states: {
            hover: {
              color: '#93c5fd',
            },
          },
          dataLabels: {
            enabled: false,
          },
        },
      },
      series: [
        {
          type: 'map',
          name: 'Orders',
          mapData: europeMap,
          data,
          joinBy: ['iso-a2', 'code'],
        },
      ],
    }),
    [data]
  )

  return (
    <MapsChart
      options={options}
      containerProps={{ style: { width: '100%', height: '100%' } }}
    />
  )
}
