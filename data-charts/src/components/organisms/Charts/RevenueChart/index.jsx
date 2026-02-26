import { useMemo } from 'react'
import { Chart } from '@highcharts/react'

export default function RevenueChart({ orders, currency = 'EUR' }) {
  const { categories, data } = useMemo(() => {
    const revenueByDay = orders.reduce((acc, order) => {
      const dayKey = order.timestamp.slice(0, 10)
      const revenue = order.quantity * order.unitPrice

      acc[dayKey] = (acc[dayKey] || 0) + revenue

      return acc
    }, {})

    const sortedDays = Object.keys(revenueByDay).sort()

    const formatter = new Intl.DateTimeFormat('en', {
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    })

    return {
      categories: sortedDays.map((day) =>
        formatter.format(new Date(`${day}T00:00:00Z`))
      ),
      data: sortedDays.map((day) => Number(revenueByDay[day].toFixed(2))),
    }
  }, [orders])

  const options = useMemo(
    () => ({
      chart: {
        type: 'areaspline',
        backgroundColor: 'transparent',
        spacingTop: 8,
        spacingRight: 8,
        spacingBottom: 8,
        spacingLeft: 8,
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
        tickLength: 0,
        lineColor: '#334155',
        labels: {
          style: {
            color: '#94a3b8',
            fontSize: '12px',
          },
        },
      },
      yAxis: {
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
        shared: true,
        backgroundColor: 'rgba(15, 23, 42, 0.96)',
        borderColor: '#334155',
        style: {
          color: '#e2e8f0',
        },
        valuePrefix: `${currency} `,
        valueDecimals: 2,
      },
      plotOptions: {
        series: {
          animation: false,
        },
        areaspline: {
          lineWidth: 3,
          fillOpacity: 0.14,
          marker: {
            enabled: true,
            radius: 4,
            lineWidth: 2,
            lineColor: '#0f172a',
            fillColor: '#60a5fa',
          },
        },
      },
      series: [
        {
          type: 'areaspline',
          name: 'Revenue',
          data,
          color: '#60a5fa',
        },
      ],
    }),
    [categories, currency, data]
  )

  return <Chart options={options} />
}
