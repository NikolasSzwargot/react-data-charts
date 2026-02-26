import euMap from '@highcharts/map-collection/custom/european-union.topo.json'

import { useEffect, useMemo, useState } from 'react'
import { MapsChart } from '@highcharts/react/Maps'
import useOrdersByCountry from '../../../../hooks/useOrdersByCountry'

export default function CountryMapChart({ orders }) {
  const data = useOrdersByCountry(orders)
  const [mapData, setMapData] = useState(null)

  useEffect(() => {
    let active = true

    fetch('https://code.highcharts.com/mapdata/custom/europe.topo.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to load map data')
        }

        return response.json()
      })
      .then((topology) => {
        if (active) {
          setMapData(topology)
        }
      })
      .catch(() => {
        if (active) {
          setMapData(null)
        }
      })

    return () => {
      active = false
    }
  }, [])

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
      series: mapData
        ? [
            {
              type: 'map',
              name: 'Orders',
              mapData: euMap,
              data,
              joinBy: ['iso-a2', 'code'],
            },
          ]
        : [],
    }),
    [data, mapData]
  )

  if (!mapData) {
    return (
      <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-700 text-sm text-slate-400">
        Loading map…
      </div>
    )
  }

  return (
    <MapsChart
      options={options}
      containerProps={{ style: { width: '100%', height: '100%' } }}
    />
  )
}
