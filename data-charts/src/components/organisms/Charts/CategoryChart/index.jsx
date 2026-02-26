import { useMemo } from 'react'
import { Chart } from '@highcharts/react'
import useOrdersByCategoryChartData from '../../../../hooks/useOrdersByCategory'

export default function CategoryChart({ orders }) {
  const { categories, data } = useOrdersByCategoryChartData(orders)

  const options = useMemo(
    () => ({
      chart: {
        type: 'column',
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
      xAxis: {
        categories,
        lineColor: '#334155',
        tickLength: 0,
        labels: {
          style: {
            color: '#94a3b8',
            fontSize: '12px',
          },
        },
      },
      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: null,
        },
        gridLineColor: '#1e293b',
        labels: {
          style: {
            color: '#94a3b8',
            fontSize: '12px',
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.96)',
        borderColor: '#334155',
        style: {
          color: '#e2e8f0',
        },
        pointFormat:
          '<span style="color:{point.color}">\u25CF</span> Orders: <b>{point.y}</b>',
      },
      plotOptions: {
        series: {
          animation: false,
        },
        column: {
          borderRadius: 10,
          pointPadding: 0.14,
          groupPadding: 0.12,
          borderWidth: 0,
        },
      },
      series: [
        {
          type: 'column',
          name: 'Orders',
          data,
          color: '#60a5fa',
        },
      ],
    }),
    [categories, data]
  )

  return (
    <Chart
      options={options}
      containerProps={{ style: { width: '100%', height: '100%' } }}
    />
  )
}
